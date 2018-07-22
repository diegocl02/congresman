import React, { Component } from 'react';
import '../App.css';
import ReactFC from 'react-fusioncharts';
// import { pieChartConfigs } from '../components/PieChar.js'
import { barChartConfigs } from '../components/BarChar.js'
import { RingLoader } from 'react-spinners';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
// import { NONAME } from 'dns';

Charts(FusionCharts);

class Statistics extends Component {
    constructor(props) { 
        super(props);
        console.log("is in stat",props)
            this.state = {
                pro: undefined,
                cons: undefined,
                alt: undefined,
                dataStatistics: props.dataProjects,
            } 
    };

    componentDidMount() {
        if (this.state.pro === undefined && this.state.cons === undefined) {
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
        console.log(this.state)
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
                    subcaption: "",
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
                width: 600,
                height: 450,
                dataFormat: "json",
                dataSource: pieMyDataSource
            };

            return (

                <div className="Grid-container">
                    <div className="Grid-item" style={{width: '1200px', border: 'none', padding: '3%'}}>
                        {this.state.dataStatistics[12]["title"]}
                    </div>
                    <div className="Grid-item">
                        <ReactFC {...pieChartConfigs} />
                        <ReactFC {...barChartConfigs} />
                    </div>
                </div>
            )
        }
    }
}

export default Statistics;