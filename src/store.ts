import {reactive} from 'vue'

export type AcroElement = {
    letter: string,
    meaning: string,
    definition: string,
    dos: {
        title: string,
        points: string[]
    },
    donts: {
        title: string,
        points: string[]
    }
}

export type Store = {
    count: number,
    increment: () => void,
    acroElements: AcroElement[]
}

export const store: Store = reactive({
    count: 0,
    increment() {
        this.count++
    },
    acroElements: [
        {
            letter: 'A',
            meaning: 'Act as a ..., Bot Persona',
            definition: 'Define the bot persona of the AI assistant just in a few words.',
            dos: {
                title: 'Be very specific in your description.',
                points: [
                    'Act as a sensitive elderly psychotherapist...',
                    'Act as a patient support staff...',
                    'Act as a professional journalist...',
                    'Act as a pebble, a car in love with its driver ...',
                    'Act as a 4th grader math tutor...',
                    'Act as a csh-terminal on the mac...',
                ]
            },
            donts: {
                title: ' Don\'t describe a behaviour that the AI exhibits anyway.',
                points: [
                    'Act as a helpful AI ...',
                ]
            }
        },
        {
            letter: 'U',
            meaning: 'User Persona, Audience',
            definition: 'Describe the audience, their background, the expected level of knowledge of the recipients in a few words',
            dos: {
                title: 'Describe the audience.\n',
                points: [
                    'Explain it like to someone with an MSc in software engineering...\n',
                    'like to a 5-year-old child\n',
                    'to the owner of the Tesla model S...',
                ],
            },
                donts: {
                    title: ' Don\'t be unspecific about the audience.\n',
                    points: [
                        '... tell me ...\n',
                        'to the user...'
                    ]
                }
            },
        {
            letter: 'T',
            meaning: 'Targeted action',
            definition: 'Use a meaningful verb and objects describing the transformation from input to output or the way the model should produce or create the output',
            dos: {
                title: 'Describe the task.\n',
                points: [
                    '... summarize...\n',
                    '... list ...\n',
                    '... translate...\n',
                    '... classify...\n',
                    '... explain ...\n',
                    '... extract...\n',
                    '... format ...\n',
                    '... comment...\n',
                    '... document the code ...'],
            },
            donts: {
                title: ' Avoid using verbs like "answer".\n',
                points: [
                    'answer the question... write a ...\n',
                    '... give me ...'],
            }
        },
        {
            letter: 'O',
            meaning: 'Output Definition',
            definition: 'The output can be described in a separate section in great detail, see below.',
            dos: {
                title: ' Describe the output.\n',
                points: [
                    '. a list of steps...\n',
                    '. a formula...\n',
                    'a table...\n',
                    '...python code....\n',
                    '... a JSON...\n',
                    'floating-point number between 0.0 and 1.0...\n',
                    'a recipe with a list of ingredients for 4 persons...\n',
                    'a list of two-letter ISO country codes...\n',
                    '... a iambic pentameter...',]
            },
            donts: {
                title: ' Don\'t be too general.\n',
                points: [
                    '... an answer...\n',
                    '... a text ...\n',
                    'a few ...']
            }
        },
        {
            letter: 'M',
            meaning: 'Mode/Tonality/Style',
            definition: 'Define the way the model should convey the message.\n' +
                'This can help with conversational\n' +
                'utterances or text output for human users (mails, stories, posts, ...)',
            dos: {
                title: 'Describe the mode/tone/style.\n',
                points: [
                    '... empathetic...\n',
                    '... confident ... aggressive ... ... moaning....\n',
                    '... sarcastic ... witty... .stuttering...\n',
                    '.Hemingway style...\n',
                    'like in a legal text...',]
            },
            donts: {
                title: ' Don\'t describe a behaviour that the AI tries to exhibit anyway (without specific prompting).\n',
                points: [
                    '... friendly... ... neutral...\n',
                    '...smart...\n',
                    '... intelligent...']
            }
        },
        {
            letter: 'A', meaning: 'Atypical cases',
            definition: 'This mainly makes sense for a model integrated into an application or for a prompt which is used for several requests.\n' +
                'You will usually not need edge case handling when typing the prompt directly in a playground (like ChatGPT, etc.)',
            dos: {
                title: 'Describe atypcial, edge cases.\n',
                points: [
                    'and list these movies in a table with the columns "title", "director", "release date". If "director" or "release date" is missing, put a "-" to the cell. If the title is not known, don\'t put the movie into the table.\n',
                    'if the answer on the question is not in the provided context, tell the user, you can\'t answer the question on basis of your material ...\n',
                    '... if the category of the mail is neither "offer", "confirmation", "receipt", set the category as "NULL" and don\'t fill the content fields.\n',
                    '... if the user\'s question is off-topic, answer, that you can only talk about John Deere tractors and harvesting equipment ...\n',
                    '... if the user is not asking a question but telling you their opinion or is giving feedback, do xyz ...',
                ],

            },
            donts: {
                title: ' Don\'t forget to say what should be done if an assumption is not correct.\n',
                points: [
                    'answer only on the basis of your knowledge ... > and if you don\'t know, what then?\n',
                    '... translate the English input text to French ... > and if someone gives French input? Leave it in French or translate it to English?'
                ],
            }
        },
        {
            letter: 'T',
            meaning: 'Topic whitelisting',
            definition: 'When building a conversational system, you may not want the model to talk about anything and everything, because it may hallucinate, touch critical topics, etc.',
            dos: {
                title: ' List permitted conversation topics.\n',
                points: [
                    'answer only questions regarding the CRB2004, it\'s features and operations. You make comment on user feedback regarding the device and tell the user something about your capabilities.',
                ]
            },
            donts: {
                title: ' Don\'t tell the model what not to talk about. The list will typically not be exhaustive.\n',
                points: [
                    'don\'t talk about politics, sex life, religion, the Middle East conflict, conspiracy theories, race, ... > but talking about how to best commit suicide, hack into government servers, making your girlfriend submissive is fine?',
                ]
            }
        },
    ],
})