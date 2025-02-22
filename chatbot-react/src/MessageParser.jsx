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

            














        } else {
            this.actionProvider.handleGreeting();
        }
    }
}

export default MessageParser;