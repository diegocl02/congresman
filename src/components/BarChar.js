
export const barMyDataSource = {
    chart: {
      caption: 'DISTRIBUCIÓN DEMOGRÁFICA DE VOTOS',
      subCaption: 'Proyecto de Ley: LEY QUE AUTORIZA EL NOMBRAMIENTO DE LOS MÉDICOS CIRUJANOS CONTRATADOS EN EL MINISTERIO DE DEFENSA, MINISTERIO DEL INTERIOR, MINISTERIO DE JUSTICIA, MINISTERIO PÚBLICO, MINISTERIO DE EDUCACIÓN Y UNIVERSIDADES NACIONALES',
      numberPrefix: '',
    },
    data: [
      {
        label: 'Pasco',
        value: '4',
      },
      {
        label: 'Ancash',
        value: '1',
      },
      {
        label: 'Cajamarca',
        value: '2',
      },
      {
        label: 'La Libertad',
        value: '1',
      },
    ],
  };
  
  export const barChartConfigs = {
    type: 'column2d',
    width: 500,
    height: 400,
    dataFormat: 'json',
    dataSource: barMyDataSource,
  };