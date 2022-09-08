app.controller("meuControlador",
    function($scope) {
        $scope.nome = 'Gabriel Duarte';
        $scope.idade = 19;
        $scope.peso = 79.3;
        $scope.altura = 1.73
        $scope.sexo = 'M';
    }
);

app.controller("controladorTime", 
    function($scope) {
        $scope.times = [
            'Palmeiras',
            'Flamengo',
            'Corinthians',
            'Fluminense',
            'Athletico-PR'
        ];
    }
);

app.controller("controladorTabela", 
    function($scope) {
        $scope.times = [
            {pos:'1º', time:'Palmeiras', pts:'48'},
            {pos:'2º', time:'Flamengo', pts:'39'},
            {pos:'3º', time:'Corinthians', pts:'39'},
            {pos:'4º', time:'Fluminense', pts:'38'},
            {pos:'5º', time:'Athletico-PR', pts:'37'},
            {pos:'6º', time:'Internacional', pts:'36'},
            {pos:'7º', time:'Atlético-MG', pts:'35'}
        ];
    }
);