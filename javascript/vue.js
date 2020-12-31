Vue.component('button-choose', {
    props:{
        cauhoi:Object,
        dapan:Array,
        increment:Function
    },

    data: function()
    {
        return{
            selectIndex : null,
            CorrectAnswer : false,
            AnswerSelect  : false
        }
    },
    methods:
        {
            selectAnswer(index)//khi click đổi màu button được chọn
            {
                this.selectIndex=index

            },
            AnswerClass(index)//khi click đổi màu button được chọn
            {
                let getAnswerClass='';
                if(this.selectIndex==index)
                {
                    getAnswerClass='answerClass';
                }
                return getAnswerClass;
            },
            checkAnswer()// kiểm tra đúng sai
            {
                if(this.cauhoi.correct==this.selectIndex)
                {
                    this.CorrectAnswer=true
                }
                this.increment(this.CorrectAnswer);

            }
        },

    template: `
   
   <div class="scroll-cards__item" >
   	<p>{{cauhoi.question}}</p>
  	<button
      v-for="(item,index) in dapan"
      :key="index"
      @click.prevent="selectAnswer(index)"
      v-bind:class="AnswerClass(index)"
    >
      {{item}}
    </button>	
      <div>
        <button
        @click="checkAnswer()" 
        >submit</button>
      </div>
    </div>    
`

});

var question = new Vue({
    el:"#questionComponent",
    data: {

        StoreQuestion:
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

            ],// bien luu cau hoi
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

        ],//bien luu dap an [ [],[] ]// bien luu cau hoi
        //bien luu dap an [ [],[] ]
        numCorrect:0,
        TotalSubmit:0

    },
    methods:
        {
            increment(IsCorrect)
            {
                if(IsCorrect==true)
                {
                    this.numCorrect++;
                }
                this.TotalSubmit++;
            }
        },



});