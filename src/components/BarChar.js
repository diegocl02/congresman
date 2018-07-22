
export const barMyDataSource = {
    chart: {
      caption: 'DISTRIBUCIÓN DEMOGRÁFICA DE VOTOS',
      subCaption: '',
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
    width: 600,
    height: 450,
    dataFormat: 'json',
    dataSource: barMyDataSource,
  };