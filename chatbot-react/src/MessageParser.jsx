// Se ha establecido que detecte palabras incluso si tienen o no, acentos, mayúsculas o minúsculas.
function normalizeText(text) {
    const accents = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        Á: 'A',
        É: 'E',
        Í: 'I',
        Ó: 'O',
        Ú: 'U'
    };
    return text
        .toLowerCase()
        .split('')
        .map(char => accents[char] || char)
        .join('');
}

class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parseScheduleQuestion(message) {
       
    }

    parse(message) {
        const normalizedMessage = normalizeText(message);

        if (normalizedMessage.includes("hola") || normalizedMessage.includes("buenas")) {
            this.actionProvider.handleGreeting();
        } else if (normalizedMessage.includes("ayuda") || normalizedMessage.includes("asistencia")) {
            this.actionProvider.handleHelp();


            //Desde aquí

        } else if (normalizedMessage.includes("calendario academico") || normalizedMessage.includes("calendario semestre") || normalizedMessage.includes("cual es el calendario academico para este semestre")) {
            this.actionProvider.handleAcademicCalendar();
        } else if (normalizedMessage.includes("informacion academica") || normalizedMessage.includes("info academica")) {
            this.actionProvider.handleAcademicInfo();
        } else if (normalizedMessage.includes("horario de clases") || normalizedMessage.includes("donde puedo encontrar mi horario de clases")) {
            this.actionProvider.handleClassSchedule();
        } else if (normalizedMessage.includes("periodos de inscripcion") || normalizedMessage.includes("cuando son los periodos de inscripcion para cursos")) {
            this.actionProvider.handleEnrollmentPeriods();
        //Hasta aquí es con respecto a información académica :)


        //Estos son para reconocer palabras clave para los recursos y servicios del campus

        } else if (normalizedMessage.includes("donde esta la biblioteca") || normalizedMessage.includes("horarios de la biblioteca")) {
            this.actionProvider.handleLibraryInfo();
        } else if (normalizedMessage.includes("contactar al departamento de servicios estudiantiles") || normalizedMessage.includes("como contactar servicios estudiantiles")) {
            this.actionProvider.handleStudentServicesContact();
        } else if (normalizedMessage.includes("evento importante en el campus esta semana") || normalizedMessage.includes("eventos en el campus esta semana")) {
            this.actionProvider.handleCampusEvents();

            //Hasta aquí es con respecto a los recursos y servicios del campus


            //Aquí tiene que ir  reconocer palabras clave para preguntas sobre apoyo y bienestar estudiantil

        } else if (normalizedMessage.includes("apoyo emocional") || normalizedMessage.includes("bienestar estudiantil") || normalizedMessage.includes("ayuda emocional")) {
            this.actionProvider.handleEmotionalSupport();
        } else if (normalizedMessage.includes("recursos disponibles para estudiantes con discapacidades") || normalizedMessage.includes("ayuda para estudiantes con discapacidades")) {
                this.actionProvider.handleDisabilityResources();
        } else if (normalizedMessage.includes("servicios de asesoramiento") || normalizedMessage.includes("tutoria para mejorar mi rendimiento academico") || normalizedMessage.includes("servicios de tutoría para mejorar mi rendimiento academico")) {
            this.actionProvider.handleAcademicCounseling();

            //Reconociendo palabras clave para Orientación sobre carrera
        } else if (normalizedMessage.includes("pasantías y prácticas") || normalizedMessage.includes("Cómo puedo encontrar pasantías o prácticas profesionales") || normalizedMessage.includes("informacion sobre pasantias o prácticas profesionales")) {
            this.actionProvider.handleInternshipsAndPracticums();
        } else if (normalizedMessage.includes("curriculum vitae") || normalizedMessage.includes("recursos para ayudarme a escribir curriculum cv") || normalizedMessage.includes("ayuda para escribir curriculum vitae")) {
            this.actionProvider.handleCurriculumVitae();
        } else if (normalizedMessage.includes("entrevistas de trabajo") || normalizedMessage.includes("talleres disponibles para prepararme para entrevistas de trabajo") || normalizedMessage.includes("preparacion para entrevistas")) {
            this.actionProvider.handleJobInterviews();
          //fin de Orientación sobre carrera  



           
            // Vida estudiantil y eventos sociales

        } else if (normalizedMessage.includes("clubes en el campus") || normalizedMessage.includes("actividades extracurriculares disponibles")) {
            this.actionProvider.handleCampusClubs();
        } else if (normalizedMessage.includes("actividad interesante este fin de semana") || normalizedMessage.includes("eventos en el campus este fin de semana")) {
            this.actionProvider.handleWeekendEvents();
        } else if (normalizedMessage.includes("opciones de alimentacion en el campus") || normalizedMessage.includes("donde puedo comer en el campus")) {
            this.actionProvider.handleCampusDining();

            //fin de la visa estudiantil y eventos sociales





        } else {
            this.actionProvider.handleGreeting();
        }
    }
}

export default MessageParser;
