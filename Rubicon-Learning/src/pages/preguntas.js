const preguntas = [
    {
      titulo: "¿Cuál es el mejor lenguaje de programación?",
      opciones: [
        { textoRespuesta: "JavaScript", isCorrect: true },
        { textoRespuesta: "PHP", isCorrect: false },
        { textoRespuesta: "C++", isCorrect: false },
        { textoRespuesta: "Kotlin", isCorrect: false },
      ],
    },
    {
      titulo: "Cuales son los dos digitos que se usan en codigo binario?",
      opciones: [
        { textoRespuesta: "0, 1", isCorrect: true },
        { textoRespuesta: "1, 2", isCorrect: false },
        { textoRespuesta: "0, 2", isCorrect: false },
        { textoRespuesta: "1, 3", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
      opciones: [
        { textoRespuesta: "111", isCorrect: true },
        { textoRespuesta: "12", isCorrect: false },
        { textoRespuesta: "Syntax Error", isCorrect: false },
        { textoRespuesta: "`11`1", isCorrect: false },
      ],
    },
    {
      titulo: "¿En qué año fue creado JavaScript?",
      opciones: [
        { textoRespuesta: "1997", isCorrect: false },
        { textoRespuesta: "2001", isCorrect: false },
        { textoRespuesta: "1987", isCorrect: false },
        { textoRespuesta: "1995", isCorrect: true },
      ],
    },
  ];
  
  export default preguntas;