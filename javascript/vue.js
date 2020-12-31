Vue.component('button-counter', {
  props:{
    cauhoi:Object,
    dapan:Array,
    increment:Function,

  },
  
  data: function()
  {

    return{
      selectIndex : null,
      CorrectAnswer : false,
      AnswerSelect  : false,
      allowSubmit   : false,
      answered      : false,
      WongAnswer    : false,
      correcAnswertClass :false,
      wrongAnswerClass    :false,
      isCheck:false,
      hidden:true,
      ShowCard:false,
      ShowMainCard:true,
      ketqua:null
     

    }
  },
  

   methods:
    {
      hiddenCard()
      {
        this.ShowMainCard=false
      },
      selectAnswer(index)//khi click đổi màu button được chọn
      {
        this.selectIndex=index        

      },
      AnswerClass(index)//khi click đổi màu button được chọn
      {
       
        let answerClass=''
        if (this.selectIndex === index) {
          answerClass = 'answerClass';
        }
               
        this.allowSubmit=true;
        return answerClass
      },
      checkAfterSubmit(index)
      { 
          let answerClass="";
         if(this.isCheck==true&&this.cauhoi.correct==index)
         {
            answerClass ='correctAnswerClass';
         }
        else if(this.isCheck==true&& this.cauhoi.correct!=index && this.selectIndex==index)
         {
           answerClass='wrongAnswerClass';
         }

         return answerClass;
      },
      checkAnswer()// kiểm tra đúng sai
      {
        if(this.cauhoi.correct==this.selectIndex)
        {
          this.CorrectAnswer=true;
          this.ketqua="congratulations";
        }
        else
        {
          this.ketqua="false";
        }
        
        this.isCheck=true;
        this.hidden=false;
        this.ShowCard=true;
        // for(let i=0;i<4;i++)
        // {
        //   checkAfterSubmit(i);

        // }
        this.increment(this.CorrectAnswer);
        
      },
     
      destroy() {
        this.selectIndex=null;
        this.$destroy();
      }
    },

  template: `
   
   <div class="scroll-cards__item" v-show="ShowMainCard" >
    <p>{{ketqua}}</p>
   	<p>{{cauhoi.question}}</p>
  	<button
      v-for="(item,index) in dapan"
      :key="index"
      @click.prevent="selectAnswer(index)"
      v-bind:class="[AnswerClass(index),checkAfterSubmit(index)]"


    >
      {{item}}
    </button>	
      <div>
        <button
        
        @click="checkAnswer()"
        :disabled="selectIndex === null  " 
        v-show="hidden"
        >submit</button>

        <button
         v-show="ShowCard" 
         @click="hiddenCard()"
        >
          hidden
        </button>
      </div>
    </div>    
`



});

var question = new Vue({
	el:"#questionComponent",
	data: {

   		StoreQuestion:
            [
                {correct: 3,question:'What is my favorite'},
                {correct: 2,question:'Hello dog'},
                {correct: 1,question:'Hello chicken'}
            ],// bien luu cau hoi
   		Answers:[
   		    ['chicken','meat','rice','beef'],
            ['ok','gau','ang','cmm'],
            ['q','lo','zo','ae']
        ],//bien luu dap an [ [],[] ]
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
    }
});