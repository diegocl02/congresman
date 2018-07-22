import React, { Component } from 'react';
import '../App.css';
import ReactFC from 'react-fusioncharts';
// import { pieChartConfigs } from '../components/PieChar.js'
import { barChartConfigs } from '../components/BarChar.js'
import { RingLoader } from 'react-spinners';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

class Statistics extends Component {
    constructor(props) {
        super(props);
            this.state = {
                pro: undefined,
                cons: undefined,
                alt: undefined,
            } 
    };

    componentDidMount() {
        if (this.state.data === undefined) {
            var AjaxPromise = require('ajax-promise');
            AjaxPromise
                .get('/votesPerAnswer')
                .then((response) => {
                        console.log(response);
                        this.setState({
                        pro: response[0].number,
                        cons: response[1].number,
                        })
                    })
                }
        };


    render() {

        if (this.state.pro === undefined && this.state.cons === undefined) {
            return (
                <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <RingLoader />
                </div>
            )
        } else {

            var pieMyDataSource = {
                chart: {
                    caption: "NÚMERO DE VOTOS A FAVOR, EN CONTRA Y PROPUESTAS ALTERNATIVAS",
                    subcaption: "Proyecto de Ley: LEY QUE AUTORIZA EL NOMBRAMIENTO DE LOS MÉDICOS CIRUJANOS CONTRATADOS EN EL MINISTERIO DE DEFENSA, MINISTERIO DEL INTERIOR, MINISTERIO DE JUSTICIA, MINISTERIO PÚBLICO, MINISTERIO DE EDUCACIÓN Y UNIVERSIDADES NACIONALES",
                    startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "$label : $datavalue",
                    theme: "ocean"
                },
                data: [{
                    label: "A favor",
                    value: this.state.pro
                }, {
                    label: "En contra",
                    value: this.state.cons
                }, {
                    label: "Propuesta alternativa",
                    value: "0"
                }]
            };
            
            var pieChartConfigs = {
                id: "age-profile-chart",
                renderAt: "age-profile-chart-container",
                type: "pie3d",
                width: 498,
                height: 400,
                dataFormat: "json",
                dataSource: pieMyDataSource
            };

            return (

                <div className="Grid-container"> 
                <div className="Grid-item">
                <ReactFC {...pieChartConfigs} />
                </div>
                <div className="Grid-item">
                <ReactFC {...barChartConfigs} />
                </div>
                </div>
            )
        }
    }
}

export default Statistics;