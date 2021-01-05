Vue.component('content-card', {
    props:{
        a:Object,
        b:Array,
        increment:Function
    },

    data: function()
    {
        return{

            RightAnswer : false,
            AnswerSelect  : false,
            selectIndex : null
        }
    },
    methods:
        {
            selectAnswer(index)
            {
                this.selectIndex=index;

            },
            AnswerClass(index)
            {
                let getAnswer='';
                if(this.selectIndex==index)
                {
                    getAnswer='answerClass';
                }
                return getAnswer;
            },
            checkAnswer()
            {
                if(this.a.correct==this.selectIndex)
                {
                    this.RightAnswer=true;
                }
                this.increment(this.RightAnswer);

            }
        },

    template: `
   
   <div class="scroll-cards__item" >
   	<p>{{a.question}}</p>
  	<button
      v-for="(item,index) in b"
      :key="index"
      @click.prevent="selectAnswer(index)"
      v-bind:class="AnswerClass(index)"
    >
      {{item}}
    </button>	
      <div>
        <button
        @click="checkAnswer()" 
        >Submit</button>
      </div>
    </div>    
`

});
var ArchiveQuestion=[];

var question = new Vue({
    el:"#Component",
    data: {

        ArchiveQuestion:
            [
                {correct: 2,question:'What is 4 + 5?'},
                {correct: 2,question:'What is the most expensive pistol in CS:GO?'},
                {correct: 0,question:'When were the game "Overwatch" released?'},
                {correct: 1,question: 'What is "PHP" mean?'},
                {correct: 3,question: 'How many countries in Asia?'},
                {correct: 2,question: 'How many countries in Europe'},
                {correct: 3,question: 'When were America established?'},
                {correct: 1,question: 'Which animal is a predator?'},
                {correct: 0,question: 'Which animal is an herbivore?'},
                {correct: 2,question: 'What is 12*20'}

            ],
        Answers:[
            [6,8,9,13],
            ['P250','Glock-18','Desert Eagle','USP-S'],
            [2016,2017,2018,2020],
            [' People Home Page',' Personal Home Page',' Personal Host Page','Push Hint Page'],
            [43,50,49,48],
            [38,42,44,47],
            [1759,1692,1741,1766],
            ['Cat','Tiger','Dog','Horse'],
            ['Deer','Snake','Shark','Panther'],
            [220,230,240,250]

        ],
        CorrectAnswer:0,
        Total:0

    },
    methods:
        {
            increment(IsCorrect)
            {
                if(IsCorrect==true)
                {
                    this.CorrectAnswer++;
                }
                this.Total++;
            }
        },



});