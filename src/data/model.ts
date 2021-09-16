import { Quiz } from "./quizTypes";
const quiz:Quiz={
    quizname:"Movies",
    questions:[
        {
            question:"What animal was Tarzan raised by?",
            points:5,
            options:[
              {
                value:"a) Wolves",
                isCorrect:false
              },
              {
                value:"b) Gorillas",
                isCorrect:true
              }
            ]
        },

        {
            question:"How long was the Genie stuck in the lamp before Aladdin released him?",
            points:5,
            options:[
              {
                value:"a) 10,000 years",
                isCorrect:true
              },
              {
                value:"b) 400 years",
                isCorrect:false
              }
            ]
        },
        {
            question:"Who was the first Disney princess?",
            points:5,
            options:[
              {
                value:"Cinderella",
                isCorrect:true
              }, 
                {
                  value:"Snow White",
                  isCorrect:true
                }
            ]
        },

        {
            question:"What do Aladdin and his monkey Abu steal from the marketplace when you’re first introduced to them in the movie?",
            points:5,
            options:[
              {
                value:"An apple",
                isCorrect:false
              }, 
                {
                  value:"A loaf of bread",
                  isCorrect:true
                }
            ]
        }

    ]
}
export {quiz};