class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleGreeting = () => {
      const message = this.createChatBotMessage("¡Hola! ¿Cómo puedo ayudarte?");
      this.updateChatbotState(message);
    };
  
    handleHelp = () => {
      const message = this.createChatBotMessage("Puedo responder preguntas sobre productos, servicios o asistencia técnica.");
      this.updateChatbotState(message);
    };

    //Desde aquí es con respecto a información académica

    handleAcademicInfo = () => {
      const message = this.createChatBotMessage("¡Por supuesto! dime que necesitas");
      this.updateChatbotState(message);
    };

    handleAcademicCalendar = () => {
    const message = this.createChatBotMessage("El calendario académico para este semestre está disponible en el sitio web de la universidad. Incluye fechas importantes como el inicio y fin de clases, períodos de exámenes, vacaciones, fechas límite para la inscripción y retiro de cursos, y otros eventos académicos.");
      this.updateChatbotState(message);
    };


    handleClassSchedule = () => {
      const message = this.createChatBotMessage("Puedes encontrar tu horario de clases en el portal del estudiante.");
      this.updateChatbotState(message);
    };

    handleEnrollmentPeriods = () => {
      const message = this.createChatBotMessage("Los períodos de inscripción para cursos se anuncian en el calendario académico y en el portal del estudiante.");
      this.updateChatbotState(message);
    };

//Hasta aquí es con respecto a información académica :)



//Estos son para reconocer palabras clave para los recursos y servicios del campus

handleLibraryInfo = () => {
  const message = this.createChatBotMessage("La biblioteca está ubicada en el edificio central y sus horarios son de lunes a viernes de 8:00 a.m. a 8:00 p.m., y los sábados de 9:00 a.m. a 1:00 p.m.");
  this.updateChatbotState(message);
};

handleStudentServicesContact = () => {
  const message = this.createChatBotMessage("Puedes contactar al departamento de servicios estudiantiles a través del correo electrónico servicios.estudiantiles@universidad.edu o llamando al (123) 456-7890.");
  this.updateChatbotState(message);
};

handleCampusEvents = () => {
  const message = this.createChatBotMessage("Esta semana hay una feria de empleo el miércoles y un concierto de la banda universitaria el viernes. ¡No te lo pierdas!");
  this.updateChatbotState(message);
};

//Hasta aquí es con respecto a los recursos y servicios del campus



//Desde aquí es con respecto a apoyo y bienestar estudiantil

handleEmotionalSupport = () => {
  const message = this.createChatBotMessage("Para apoyo emocional y manejo del estrés, visita el centro de bienestar estudiantil. Contacto: bienestar.estudiantil@udb.edu o  7896-3491.");
  this.updateChatbotState(message);
};

handleDisabilityResources = () => {
  const message = this.createChatBotMessage("Accede a recursos para discapacidades a través de la oficina de servicios para discapacitados. Contacto: discapacidades@udb.edu o  6356-7092.");
  this.updateChatbotState(message);
};

handleAcademicCounseling = () => {
  const message = this.createChatBotMessage("Mejora tu rendimiento académico con asesoramiento y tutoría en el centro de apoyo académico. Contacto: academico@udb.edu o  7456-7893.");
  this.updateChatbotState(message);
};

//Tematica: Orientación sobre carrera y desarrollo profesional

handleInternships = () => {
  const message = this.createChatBotMessage("Para información sobre pasantías y prácticas profesionales, contacta a la oficina de desarrollo profesional. Contacto: 2251-8213");
  this.updateChatbotState(message);
};

handleCV = () => {
  const message = this.createChatBotMessage("Para asesoramiento sobre cómo crear un currículum vitae efectivo, visita el centro de desarrollo profesional. Contacto: 2251-8213");
  this.updateChatbotState(message);
};

handlejobinterview = () => {
  const message = this.createChatBotMessage("Prepárate para una entrevista de trabajo exitosa con la ayuda del centro de desarrollo profesional. Contacto: 2251-8213");
  this.updateChatbotState(message);
};









  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
