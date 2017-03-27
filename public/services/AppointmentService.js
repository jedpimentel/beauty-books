(function(){
  angular
    .module("BeautyBooks")
    .service("AppointmentService", AppointmentService);

  function AppointmentService($http){
    var api = {
    "createAppointment": createAppointment,
    "getAppointment": getAppointment,
    "updateAppointment": updateAppointment,
    "deleteAppointment": deleteAppointment
    };
    return api;

    function createAppointment(appointment){
        return $http.post('/api/appointment', appointment);
    }
    function createAppointment(appointment){
        return $http.get('/api/appointment'+appointmentId);
    }
    function createAppointment(appointmentId){
        return $http.put('/api/appointment/'+appointmentId, appointment);
    }
    function createAppointment(appointmentId){
        return $http.delete('/api/appointment', appointmentId);
    }
  }
  })();
