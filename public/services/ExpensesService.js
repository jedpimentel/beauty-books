(function() {
    angular
        .module("BeautyBooks")
        .service("ExpenseService", ExpenseServices);

    function ExpenseServices($http) {
        var api = {
            "createexpense": createExpense,
            "getExpenses": getExpenses,
            "updateExpense": updateExpense,
            "deleteExpense": deleteExpense
        };
        return api;

        function createExpense(expense) {
            return $http.post('/api/expense', expense);
        }

        function getExpenses(expense) {
            return $http.get('/api/expense' + expense);
        }

        function getExpenseById(expenseId) {
            return $http.get('/api/expense/' + expenseId)
        }

        function updateExpense(expenseId) {
            return $http.put('/api/expense/' + expenseId, expense);
        }

        function deleteExpense(expenseId) {
            return $http.delete('/api/expense', expenseId);
        }
    }
})();
