(function(){
  angular
    .module("BeautyBooks")
    .service("AppointmentService", AppointmentService);

  function AppointmentService($http){
    var api = {
    "createAppointment": createAppointment,
    "getAppointment": getAppointment,
    "updateAppointment": updateAppointment,
        "getAppointmentById": getAppointmentById,
    "deleteAppointment": deleteAppointment
    };
    return api;

    function createAppointment(appointment){
        return $http.post('/api/appointment', appointment);
    }
    function getAppointments(appointmentId){
        return $http.get('/api/appointment'+appointmentId);
    }
    function getAppointmentById(appointmentId) {
      return $http.get('/api/appointment'+appointmentId);
    }
    function updateAppointment(appointmentId, appointment){
        return $http.put('/api/appointment/'+appointmentId, appointment);
    }
    function deleteAppointment(appointmentId){
        return $http.delete('/api/appointment', appointmentId);
    }
  }

})();
