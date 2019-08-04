(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),i=(a(53),a(93),a(6)),c=a(19),l=a(69),u=a(5),m=a(70),d=a(71),p=a(51),_=a(72),g=a.n(_),h=a(86),f="FETCH_TEST_START",E="FETCH_TEST_SUCCESS",b="FETCH_TEST_ERROR",w="TIME_START",v="TIME_END",T="REWRITE_CURRENTQUESTION",N="CHANGE_USER_ANSWER",C="CHANGE_USER_ANSWER_QUESTION_NUMBER",k="RESET_USER_ANSWER",S="FETCH_RESULT_ANSWER_START",y="FETCH_RESULT_ANSWER_SUCCESS",A="FETCH_RESULT_ANSWER_ERROR",x="RESET_RESULT_ANSWER",I="FETCH_NEXT_QUESTION_SUCCESS",R="RESET_NEXT_QUESTION",B="FETCH_SKIP_QUESTION_START",D="FETCH_SKIP_QUESTION_SUCCESS",O="FETCH_SKIP_ERROR",P="FETCH_FINAL_RESULT",Q="FINISH_TEST_START",q="FINISH_TEST_SUCCESS",j="FINISH_TEST_ERROR",F=function(){return{type:k,payload:{reset:null}}},L=function(e){return{type:y,payload:{resultAnswer:e}}},U=function(e){return{type:P,payload:{finalResult:e}}},H=Object(u.combineReducers)({currentQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E:case T:case D:return n.test;case q:return null;default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case f:return!0;case E:case b:case q:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case f:case E:case q:return null;case b:return n.error;default:return e}}}),M="FETCH_LANGUAGES_START",G="FETCH_LANGUAGES_SUCCESS",W="FETCH_LANGUAGES_ERROR",X="SET_LANGUAGE",z="COME_BACK_TO_STARTPAGE",K=Object(u.combineReducers)({languages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case G:return n;case q:return[];default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case M:return!0;case G:case W:case q:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case M:case G:return null;case W:return n;case q:return null;default:return e}}}),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case X:return n;case z:return"";case q:return null;default:return e}},J=Object(u.combineReducers)({currentLanguageId:Z,userId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E:return n.test.userId;case q:return"";default:return e}},currentQuestion:H,testTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startTime:null,endTime:null},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case w:return{startTime:n.time};case v:return Object(h.a)({},e,{endTime:n.time});case q:return{startTime:null,endTime:null};default:return e}},languagesInfoArr:K,userAnswer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case N:return n.userAnswer;case C:return n.questionNumber;case k:return n.reset;case q:return{};default:return e}},resultAnswered:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case y:return n.resultAnswer;case x:return n.reset;case q:return!1;default:return e}},nextQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case I:return n.nextQuestion;case R:return n.reset;case q:return{};default:return e}},finalResult:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case P:return n.finalResult;case q:return!1;default:return e}}}),Y={key:"test",storage:g.a},V=Object(u.createStore)(Object(p.a)(Y,J),Object(d.composeWithDevTools)(Object(u.applyMiddleware)(m.a))),$=Object(p.b)(V),ee=a(26),te=a(24),ae=a(16),ne=a.n(ae),re=a(25),oe=a(11),se=a(12),ie=a(14),ce=a(13),le=a(15),ue=a(38),me=a(30),de=a.n(me),pe=a(20),_e=a.n(pe),ge=a(23),he=a.n(ge),fe=function(e){var t=e.image,a=e.title,n=e.countQuestions,o=e.languageId,s=e.setLanguageReducer,i=void 0===s?function(){return null}:s;return r.a.createElement("li",{className:he.a.card},r.a.createElement(c.c,{className:he.a.link,onClick:function(){return i(o)},to:"/language_descr"}),r.a.createElement("div",{className:he.a.shadow}),r.a.createElement("div",{className:he.a.wrapper},t.length?r.a.createElement("img",{height:"85",width:"auto",className:he.a.logo,src:t,alt:"logoLang"}):r.a.createElement("div",{className:he.a.emptyImg}),r.a.createElement("p",{className:he.a.lang},a),r.a.createElement("p",{className:he.a.questions},n," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432")))};fe.defaultProps={image:""};var Ee=Object(i.b)(null,function(e){return{setLanguageReducer:function(t){return e({type:X,payload:t})}}})(fe),be=a(22),we=a.n(be),ve=function(e){return e.languagesInfoArr.languages},Te=function(e){return e.languagesInfoArr.loading},Ne=function(e){return e.languagesInfoArr.error};we.a.defaults.baseURL="https://test.goit.co.ua/api";var Ce=function(e){return function(t){t({type:Q}),we.a.post("/tests/cancel/".concat(e)).then(function(){t({type:q})}).catch(function(e){t({type:j})})}},ke=function(e){return e.currentQuestion.currentQuestion},Se=function(e){return e.resultAnswered},ye=function(e){return e.userId},Ae=function(e){return e.finalResult},xe=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.userId&&a.props.finishTest(a.props.userId),a.fetchLang()},a.fetchLang=Object(re.a)(ne.a.mark(function e(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.fetchLanguages().then(function(e){e&&a.addNotification("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")});case 2:case"end":return e.stop()}},e)})),a.addNotification=function(e){a.props.toastManager.add(e,{appearance:"error",autoDismiss:!0,pauseOnHover:!0})},a}return Object(le.a)(t,e),Object(se.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.languages;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:_e.a.section},r.a.createElement("div",{className:_e.a.sectionAbout},r.a.createElement("div",{className:_e.a.sectionText},r.a.createElement(ue.a,{query:{minWidth:768}},function(e){return e&&r.a.createElement(n.Fragment,null,r.a.createElement("blockquote",{className:_e.a.blockquote},r.a.createElement("span",{className:_e.a.lduo},"\u201c"),r.a.createElement("br",null),"\u042f \u043d\u0435 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u043b \u0442\u0435\u0441\u0442, \u044f \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0448\u0435\u043b 100 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0433\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),r.a.createElement("p",{className:_e.a.autor},"\u0411\u0435\u043d\u0434\u0436\u0430\u043c\u0438\u043d \u0424\u0440\u0430\u043d\u043a\u043b\u0438\u043d"))}),r.a.createElement("p",{className:_e.a.organization},"[ \u041e\u043d\u043b\u0430\u0439\u043d \u0442\u0435\u0441\u0442\u044b \u0434\u043b\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432"," ",r.a.createElement("a",{href:"https://goiteens.ua/",rel:"noopener noreferrer",target:"_blank"},"GoITeens")," ","]"))),t&&r.a.createElement("div",{className:_e.a.loader},r.a.createElement(de.a,{type:"Circles",color:"#00BFFF",height:"100",width:"100"})),a.length>0&&r.a.createElement("ul",{className:_e.a.langList},a.map(function(e){return r.a.createElement(Ee,Object.assign({key:e.languageId},e))}))))}}]),t}(n.Component);xe.defaultProps={error:null,userId:null};var Ie,Re,Be,De={fetchLanguages:function(){return function(){var e=Object(re.a)(ne.a.mark(function e(t){var a;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:M}),e.next=4,we.a.get("https://test.goit.co.ua/api/tests");case 4:return a=e.sent,t((r=a.data.languages,{type:G,payload:r})),e.abrupt("return",null);case 9:return e.prev=9,e.t0=e.catch(0),t((n=e.t0,{type:W,payload:n})),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}var n,r},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},finishTest:Ce},Oe=Object(i.b)(function(e){return{languages:ve(e),loading:Te(e),error:Ne(e),userId:ye(e)}},De)(Object(te.withToastManager)(xe)),Pe=function(e){return e.currentLanguageId},Qe=function(e){var t=Pe(e);return function(e){return e.languagesInfoArr.languages}(e).find(function(e){return e.languageId===t})},qe=function(e){return e.currentQuestion.loading},je=function(e){return e.currentQuestion.error},Fe=function(e){return e.testTime.startTime},Le=function(e){return e.testTime.endTime},Ue=a(47),He=a.n(Ue),Me=a(35),Ge=a.n(Me),We=a(48),Xe=a.n(We),ze=function(e){var t=e.itemName,a=e.info;return r.a.createElement("div",{className:Xe.a.textBlock_item},r.a.createElement("p",null,t),r.a.createElement("span",null),r.a.createElement("p",{className:Xe.a.textBlock_itemNumber},a))},Ke=function(e){return new Date(Date.parse(e)).toLocaleDateString()},Ze=function(e){var t=e.logo,a=e.questionCount,n=e.questionPull,o=e.createdAt,s=e.updatedAt,i=e.onClick;return r.a.createElement("div",{className:Ge.a.firstBlock},r.a.createElement("img",{className:Ge.a.firstBlockImage,src:t,alt:"languageLogo"}),r.a.createElement("div",{className:Ge.a.firstBlockTextInfo},r.a.createElement(ze,{itemName:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",info:a}),r.a.createElement(ze,{itemName:"\u041f\u0443\u043b \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432",info:n}),r.a.createElement(ze,{itemName:"\u0421\u043e\u0437\u0434\u0430\u043d",info:Ke(o)}),r.a.createElement(ze,{itemName:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d",info:Ke(s)}),r.a.createElement("button",{className:Ge.a.btnGoBack,type:"button",onClick:i},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u043e\u0432")))},Je=a(36),Ye=a.n(Je),Ve=function(e){var t=e.title,a=e.description,o=e.onStart;return r.a.createElement("div",{className:Ye.a.secondBlock},r.a.createElement(ue.a,{query:"(min-width: 768px)"},function(e){return e&&r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:Ye.a.secondBlockTitle},t),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a},className:Ye.a.secondBlockDescription}))}),r.a.createElement("button",{className:Ye.a.btnStartTest,type:"button",onClick:o},"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))},$e=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleBtnBack=function(e){var t=a.props.history;e.preventDefault(),t.push("/")},a.addNotification=function(e){a.props.toastManager.add(e,{appearance:"error",autoDismiss:!0,pauseOnHover:!0})},a.handleBtnStart=function(){var e=Object(re.a)(ne.a.mark(function e(t){var n,r,o,s,i;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,r=n.setStartTime,o=n.fetchTest,s=n.currentLanguageId,i=n.history,t.preventDefault(),e.next=4,o(s);case 4:e.sent?a.addNotification("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"):(r(Date.now()),i.push("/test"));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(le.a)(t,e),Object(se.a)(t,[{key:"render",value:function(){var e=this.props,t=e.languageInfo,a=e.languageInfo,n=a.title,o=a.description,s=a.image,i=a.pullQuestions,c=a.countQuestions,l=a.createdAt,u=a.updatedAt,m=e.loading;return r.a.createElement(r.a.Fragment,null,!t||m&&r.a.createElement("div",{className:He.a.loader},r.a.createElement(de.a,{type:"Circles",color:"#00BFFF",height:"100",width:"100"})),t&&!m&&r.a.createElement("section",{className:He.a.languageDescrPageContainer},r.a.createElement(Ze,{logo:s,questionCount:c,questionPull:i,createdAt:l,updatedAt:u,onClick:this.handleBtnBack}),r.a.createElement(Ve,{title:n,description:o,onStart:this.handleBtnStart})))}}]),t}(n.Component),et=Object(i.b)(function(e){return{languageInfo:Qe(e),currentLanguageId:Pe(e),loading:qe(e),error:je(e)}},function(e){return{fetchTest:function(t){return e(function(e){return function(){var t=Object(re.a)(ne.a.mark(function t(a){var n;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:f}),t.next=4,we.a.get("https://test.goit.co.ua/api/tests/".concat(e));case 4:n=t.sent,a((o=n.data,{type:E,payload:{test:o}})),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),a((r=t.t0,{type:b,payload:{error:r}})),t.abrupt("return",t.t0);case 12:return t.abrupt("return","");case 13:case"end":return t.stop()}var r,o},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))},setStartTime:function(t){return e({type:w,payload:{time:Date.now()}})}}})(Object(te.withToastManager)($e)),tt=a(75),at=a.n(tt),nt=a(4),rt=a.n(nt),ot=a(76),st=a.n(ot),it=a(77),ct=a.n(it),lt=a(78),ut=a.n(lt),mt=a(79),dt=a.n(mt),pt=a(80),_t=a.n(pt),gt=[st.a,ct.a,ut.a],ht=[dt.a,_t.a],ft=function(e){return Math.floor(Math.random()*e)},Et=at.a.bind(rt.a),bt=function(e){var t=e.questions,a=e.resultAnswer,n=e.onClickAnswer,o=e.onChangeUserAnswer,s=e.onClickSkipQuestion;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:rt.a.container},r.a.createElement("div",{className:rt.a.wrapperImgInput},r.a.createElement("div",{className:rt.a.inputWrapper},t.map(function(e,t){if(a){var n=t+1;Ie=a.answerCorrectly?Et({label:!0,labelCorrect:n===a.rightAnswer}):Et({label:!0,labelIncorrect:n===a.userAnswer,labelCorrect:n===a.rightAnswer}),Be=n===a.userAnswer,Re=!0}else Ie=Et({label:!0}),Re=!1,Be=!1;return r.a.createElement("label",{key:e._id,htmlFor:e._id,className:Ie},a?r.a.createElement("input",{disabled:Re,id:e._id,className:rt.a.input,name:"answer",type:"radio","data-number":e.answerNumber,onChange:o,defaultChecked:Be}):r.a.createElement("input",{disabled:Re,id:e._id,className:rt.a.input,name:"answer",type:"radio","data-number":e.answerNumber,onChange:o}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.answerText},className:rt.a.questionText}))})),a&&(a.answerCorrectly?r.a.createElement("img",{className:rt.a.img,alt:"cat",src:gt[ft(3)]}):r.a.createElement("img",{className:rt.a.img,alt:"cat",src:ht[ft(2)]}))),!a&&r.a.createElement("div",{className:rt.a.tabletContainerButton},r.a.createElement("div",{className:rt.a.buttonContainer},r.a.createElement("button",{onClick:n,type:"submit",className:rt.a.buttonConfirm},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"),r.a.createElement("button",{onClick:s,type:"submit",className:rt.a.buttonSkip},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c")))),!a&&r.a.createElement("div",{className:rt.a.mobileContainerButton},r.a.createElement("div",{className:rt.a.buttonContainer},r.a.createElement("button",{onClick:n,type:"submit",className:rt.a.buttonConfirm},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"),r.a.createElement("button",{onClick:s,type:"submit",className:rt.a.buttonSkip},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"))))};bt.defaultProps={onClickAnswer:function(){return null},onChangeUserAnswer:function(){return null},onClickSkipQuestion:function(){return null}};var wt=bt,vt=a(31),Tt=a.n(vt),Nt=function(e){var t=e.description,a=e.onClickNextQuestion;return r.a.createElement("div",{className:Tt.a.container},r.a.createElement("div",{className:Tt.a.innerContainer},t&&r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:Tt.a.title},"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u044f:"),r.a.createElement("p",{className:Tt.a.text,dangerouslySetInnerHTML:{__html:t}})),a&&r.a.createElement("button",{onClick:a,className:Tt.a.button,type:"submit"},"\u041e\u043a, \u0434\u0430\u043b\u044c\u0448\u0435")))};Nt.defaultProps={onClickNextQuestion:function(){return null},description:null};var Ct=Nt,kt=a(81),St=a.n(kt),yt=function(e){var t=e.children,a=e.className,n=e.boxShadow,o="shadowDepth".concat(n);return r.a.createElement("div",{className:"".concat(a," ").concat(St.a[o])},t)};yt.defaultProps={boxShadow:1,className:""};var At=yt,xt=a(49),It=a.n(xt),Rt=function(e){var t=e.question;return r.a.createElement(At,{boxShadow:14,className:It.a.paper},r.a.createElement("p",{className:It.a.text,dangerouslySetInnerHTML:{__html:t}}))};Rt.defaultProps={question:""};var Bt=Rt,Dt=a(32),Ot=a.n(Dt),Pt=a(87),Qt=a(82),qt=a.n(Qt),jt=function(e){var t=e.type,a=void 0===t?"button":t,n=e.children,o=e.className,s=e.variant,i=e.handleClick,c=Object(Pt.a)(e,["type","children","className","variant","handleClick"]),l=qt.a[s];return r.a.createElement("button",Object.assign({type:a,className:"".concat(l," ").concat(o),onClick:i},c),n)};jt.defaultProps={type:"button",className:"",variant:"simple",handleClick:function(){return null}};var Ft=jt,Lt=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={isToggle:!1},a.handleToggle=function(){return a.setState(function(e){return{isToggle:!e.isToggle}})},a}return Object(le.a)(t,e),Object(se.a)(t,[{key:"render",value:function(){var e=this.state.isToggle;return(0,this.props.children)({isToggle:e,toggle:this.handleToggle})}}]),t}(r.a.Component),Ut=document.getElementById("modal-root"),Ht=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(ie.a)(this,Object(ce.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){Ut.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){Ut.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return s.a.createPortal(e,this.el)}}]),t}(r.a.Component),Mt=a(28),Gt=a.n(Mt);var Wt={handleFinishTest:Ce},Xt=Object(i.b)(function(e){return{userId:ye(e)}},Wt)(function(e){var t=e.endTest,a=e.continueTest,n=e.handleFinishTest,o=e.userId;return r.a.createElement("div",{className:Gt.a.container},r.a.createElement(At,{boxShadow:6,className:Gt.a.modal},r.a.createElement("p",{className:Gt.a.text},"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u043e\u0442\u0432\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b. \u0412\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442?"),r.a.createElement("div",{className:Gt.a.controls},r.a.createElement(Ft,{variant:"outlined",handleClick:function(e){n(o),t(e)},className:Gt.a.btn,"data-redirect":"/"},"\u0414\u0430, \u0432\u044b\u0439\u0442\u0438!"),r.a.createElement(Ft,{variant:"simple",handleClick:a,className:Gt.a.btn},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0442\u0435\u0441\u0442."))))}),zt=Object(ee.f)(function(e){var t=e.title,a=e.current,n=e.length,o=e.finalResult,s=e.history;return r.a.createElement(Lt,null,function(e){var i=e.isToggle,c=e.toggle,l=function(e){s.push(e.target.dataset.redirect)};return r.a.createElement("div",{className:Ot.a.headerTest},r.a.createElement("p",{className:Ot.a.title},"[",t,"]"),o?r.a.createElement(Ft,{variant:"outlined",handleClick:l,className:Ot.a.btn,"data-redirect":"/result"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"):r.a.createElement(Ft,{variant:"outlined",handleClick:c,className:Ot.a.btn},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0442\u0435\u0441\u0442"),r.a.createElement("p",{className:Ot.a.orderQuestion},"\u0412\u043e\u043f\u0440\u043e\u0441 ",a,"/",n),i&&r.a.createElement(Ht,null,r.a.createElement(Xt,{endTest:l,continueTest:c})))})}),Kt=a(83),Zt=a.n(Kt),Jt=function(e){var t=e.desktopImage,a=e.mobileImage;return r.a.createElement("picture",null,r.a.createElement("source",{media:"(min-width: 768px)",srcSet:t}),r.a.createElement("source",{media:"(min-width: 1280px)",srcSet:t}),r.a.createElement("img",{className:Zt.a.image,src:a,alt:"mobileImage"}))},Yt=a(29),Vt=a.n(Yt),$t=function(e){function t(){var e,a;Object(oe.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={userAnswerNumber:null,userId:null,languageTitle:""},a.scrollTop=function(){return window.scrollTo({left:0,top:0,behavior:"smooth"})},a.addNotification=function(e){a.props.toastManager.add(e,{appearance:"warning",autoDismiss:!0,pauseOnHover:!0})},a.onChangeUserAnswer=function(e){a.setState({userAnswerNumber:Number(e.target.dataset.number)});var t=Number(e.target.dataset.number),n=a.props.currentQuestion,r={questionNumber:n.questionNumber,questionId:n.question.questionId,userAnswerNumber:t};a.props.onChangeAnswer(r)},a.onClickAnswer=function(){var e=a.props.currentQuestion,t=e.questionNumber,n=e.question.questionId,r=a.state,o=r.userAnswerNumber,s=r.userId;if(o){var i={questionNumber:t,questionId:n,userAnswerNumber:o};a.props.fetchResultAnswer(s,i),a.setState({userAnswerNumber:null})}else a.addNotification("\u0421\u043f\u0435\u0440\u0432\u0430 \u0432\u044b\u0431\u0435\u0440\u0438 \u043e\u0442\u0432\u0435\u0442, \u0430 \u043f\u043e\u0442\u043e\u043c \u0436\u043c\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ;)")},a.onClickNextQuestion=function(){var e=a.props,t=e.rewriteCurrentQuestion,n=e.resetFields,r=e.history;if(e.finalResult)return r.push("/result"),void a.scrollTop();t(),n(),a.scrollTop()},a.onClickSkipQuestion=function(){var e=a.props.currentQuestion,t=e.questionNumber,n=e.question.questionId,r=a.state.userId,o={questionNumber:t,questionId:n};a.props.fetchSkipTheQuestion(r,o),a.props.resetUserAnswer(),a.scrollTop()},a}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentQuestion;if(e){var t=e.userId,a=e.languageTitle;this.setState({userId:t,languageTitle:a})}}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.userId,a=e.languageTitle;if(!t||!a){var n=this.props.currentQuestion,r=n.userId,o=n.languageTitle;this.setState({userId:r,languageTitle:o})}}},{key:"render",value:function(){var e,t,a=this.props,n=a.currentQuestion,o=a.resultAnswered,s=this.state.languageTitle;return n&&n.question.image&&(e="https://test.goit.co.ua/images/".concat(n.question.image),t="https://test.goit.co.ua/images/".concat(n.question.imageMobile)),r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement("div",{className:Vt.a.loader},r.a.createElement(de.a,{type:"Puff",color:"#00BFFF",height:"100",width:"100"})),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Vt.a.testPageContainer},r.a.createElement("div",{className:Vt.a.container},r.a.createElement(zt,{title:s,current:n.questionNumber,finalResult:!1,length:n.allQuestionsCount}),r.a.createElement(Bt,{question:n.question.questionText}),n.question.image&&r.a.createElement(Jt,{desktopImage:e,mobileImage:t}),r.a.createElement(wt,{questions:n.question.answers,onChangeUserAnswer:this.onChangeUserAnswer,onClickAnswer:this.onClickAnswer,onClickSkipQuestion:this.onClickSkipQuestion,resultAnswer:o}),o&&r.a.createElement(Ct,{onClickNextQuestion:this.onClickNextQuestion,description:o.questionExplanation})),o&&(o.explanation&&o.explanation.length>100?r.a.createElement("div",{className:Vt.a.bigBackground}):r.a.createElement("div",{className:Vt.a.background})),!o&&r.a.createElement("div",{className:Vt.a.background}))))}}]),t}(n.Component);$t.defaultProps={currentQuestion:null,finalResult:null};var ea=Object(te.withToastManager)($t),ta=V.dispatch,aa=V.getState,na={fetchResultAnswer:function(e,t){return function(a){a({type:S}),we.a.post("/answer/".concat(e),t).then(function(e){if(!e.data.finalResult){var t=e.data,n={userId:t.userId,languageTitle:t.languageTitle,questionNumber:t.questionNumber,allQuestionsCount:t.allQuestionsCount,question:t.nextQuestion};return a(L(e.data.result)),void a(function(e){return{type:I,payload:{nextQuestion:e}}}(n))}a(L(e.data.result)),a(U(e.data))}).catch(function(e){return a(function(e){return{type:A,payload:{error:e}}}(e))})}},onChangeAnswer:function(e){return ta(function(e){return{type:N,payload:{userAnswer:e}}}(e))},rewriteCurrentQuestion:function(){return function(){return ta((e=aa().nextQuestion,{type:T,payload:{test:e}}));var e}},resetFields:function(){return function(){ta({type:x,payload:{reset:!1}}),ta(F()),ta({type:R,payload:{reset:null}})}},resetUserAnswer:function(){return ta(F())},fetchSkipTheQuestion:function(e,t){return function(a){a({type:B}),we.a.post("/answer/skip/".concat(e),t).then(function(e){if(!e.data.finalResult){var t=e.data,n=t.questionNumber,r=t.allQuestionsCount,o=e.data.question||e.data.nextQuestion;return a({type:D,payload:{test:{questionNumber:n,allQuestionsCount:r,question:o}}})}a(U(e.data))}).catch(function(e){return a(function(e){return{type:O,payload:{error:e}}}(e))})}}},ra=Object(i.b)(function(e){return{currentQuestion:ke(e),resultAnswered:Se(e),userId:ye(e),finalResult:Ae(e)}},na)(ea),oa=a(84),sa=a.n(oa),ia=a(85),ca=a.n(ia),la=a(3),ua=a.n(la),ma=function(e){var t,a=e.allQuestionsCount,n=e.rightAnswered,o=e.languageTitle,s=e.totalTime,i=e.rightAnsweredInPercentage;return r.a.createElement("div",{className:ua.a.container},r.a.createElement("h2",{className:ua.a.head},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0442\u0435\u0441\u0442\u0430 \u201c",o,"\u201d"),r.a.createElement("div",{className:ua.a.diagramm},r.a.createElement(ca.a,{data:[{title:"Correct",value:i,color:"#ff6c00"},{title:"Incorrect",value:100-i,color:"#8b92ab"}],lineWidth:15}),r.a.createElement("span",{className:ua.a.digrammPercentage},Math.round(i),"%")),r.a.createElement("p",{className:ua.a.wishes},(t=i)<=25?"\u0420\u0430\u043d\u0434\u043e\u043c \u043f\u0440\u043e\u0448\u0435\u043b \u0431\u044b \u044d\u0442\u043e\u0442 \u0442\u0435\u0441\u0442 \u043b\u0443\u0447\u0448\u0435(((":t>25&&t<=50?"\u041d\u0443 \u0442\u0430\u043a\u043e\u0435... \u0417\u0430\u043a\u0440\u044b\u0432\u0430\u0439, \u043f\u043e\u043a\u0430 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u0443\u0432\u0438\u0434\u0435\u043b":t>50&&t<=75?"\u0422\u044b \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u0443\u0442\u0438! \u041d\u0435 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0439\u0441\u044f":t>75&&t<=99?"\u041a\u0440\u0430\u0441\u0430\u0432\u0447\u0438\u043a! \u041d\u043e \u043c\u043e\u0436\u043d\u043e \u043b\u0443\u0447\u0448\u0435)))":"\u0418\u0434\u0435\u0430\u043b\u044c\u043d\u043e! You're the BEST!"),r.a.createElement("p",{className:ua.a.statistics},r.a.createElement("span",{className:ua.a.bracket},"[ "),"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432"," ",r.a.createElement("span",{className:ua.a.innerNumber},n),r.a.createElement("span",{className:ua.a.bracket}," ]")),r.a.createElement("p",{className:ua.a.statistics},r.a.createElement("span",{className:ua.a.bracket},"[ "),"\u0412\u0441\u0435\u0433\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432"," ",r.a.createElement("span",{className:ua.a.innerNumber},a),r.a.createElement("span",{className:ua.a.bracket}," ]")),r.a.createElement("p",{className:ua.a.statistics},r.a.createElement("span",{className:ua.a.bracket},"[ "),"\u0412\u0440\u0435\u043c\u044f"," ",r.a.createElement("span",{className:ua.a.innerNumber},s," \u043c\u0438\u043d"),r.a.createElement("span",{className:ua.a.bracket}," ]")),r.a.createElement(c.c,{className:ua.a.link,to:"/"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437"))};ma.defaultProps={allQuestionsCount:25,rightAnswered:0,languageTitle:"Java",rightAnsweredInPercentage:0};var da=ma,pa=a(39),_a=a.n(pa),ga=function(e){return e.finalResult.questions},ha=function(e){return e.finalResult.languageTitle},fa=a(50),Ea=a.n(fa),ba=function(e){var t=e.questions;return t.map(function(e,a){return r.a.createElement("div",{className:Ea.a.item,key:e.questionId},r.a.createElement(Bt,{question:e.questionText}),e.image&&r.a.createElement(Jt,{desktopImage:"https://test.goit.co.ua/images/".concat(e.image),mobileImage:"https://test.goit.co.ua/images/".concat(e.imageMobile)}),r.a.createElement(wt,{questions:e.answers,resultAnswer:{answerCorrectly:e.userAnswerCorrectly,rightAnswer:e.rightAnswer,userAnswer:e.userAnswer}}),r.a.createElement(Ct,{description:e.explanation||"",onClickNextQuestion:null}),!(t.length-1===a)&&r.a.createElement("span",{className:Ea.a.span}))})};ba.defaultProps={code:"",explanation:""};var wa=Object(i.b)(function(e){return{questions:ga(e),languageTitle:ha(e)}},null)(ba),va=function(e){return e.finalResult.allQuestionsCount},Ta=function(e){return e.finalResult.languageTitle},Na=function(e){return e.finalResult.userRightAnswered},Ca=function(e){return e.finalResult.userRightAnsweredInPercentage},ka=function(e){return e.finalResult},Sa=function(e){function t(){return Object(oe.a)(this,t),Object(ie.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(se.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setEndTime;e.endTime||t()}},{key:"getMinutes",value:function(){var e=this.props,t=e.startTime,a=e.endTime-t;return sa()(new Date(a)).format("m")}},{key:"render",value:function(){var e=this.props,t=e.endTime,a=e.allQuestionsCount,n=e.languageTitle,o=e.rightAnswered,s=e.rightAnsweredInPercentage;return e.finalResult?t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_a.a.container},r.a.createElement(da,{allQuestionsCount:a,languageTitle:n,rightAnswered:o,rightAnsweredInPercentage:s,totalTime:this.getMinutes()}),r.a.createElement(wa,null)),r.a.createElement("div",{className:_a.a.relative},r.a.createElement("div",{className:_a.a.background}))):null:r.a.createElement(ee.a,{to:"/"})}}]),t}(n.Component);Sa.defaultProps={endTime:null,finalResult:!1};var ya={setEndTime:function(){return{type:v,payload:{time:Date.now()}}}},Aa=Object(i.b)(function(e){return{startTime:Fe(e),endTime:Le(e),allQuestionsCount:va(e),languageTitle:Ta(e),rightAnswered:Na(e),rightAnsweredInPercentage:Ca(e),finalResult:ka(e)}},ya)(Sa);var xa=function(){return r.a.createElement(te.ToastProvider,{placement:"bottom-right"},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(ee.b,{exact:!0,path:"/",component:Oe}),r.a.createElement(ee.b,{exact:!0,path:"/language_descr",component:et}),r.a.createElement(ee.b,{exact:!0,path:"/test",component:ra}),r.a.createElement(ee.b,{exact:!0,path:"/result",component:Aa}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(l.a,{persistor:$},r.a.createElement(c.b,{basename:"/programming-language-tests"},r.a.createElement(xa,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,a){e.exports={section:"StartPage_section__3QrtN",sectionAbout:"StartPage_sectionAbout__2UPbG",blockquote:"StartPage_blockquote__2M68-",lduo:"StartPage_lduo__1Jehm",autor:"StartPage_autor__u5IaR",organization:"StartPage_organization__2xEya",langList:"StartPage_langList__2sotZ",loader:"StartPage_loader__13gtV",error:"StartPage_error__17dkh",sectionText:"StartPage_sectionText__194f8"}},23:function(e,t,a){e.exports={card:"LanguageCard_card__2y-Ld",link:"LanguageCard_link__KW8Bs",shadow:"LanguageCard_shadow__3fQox",logo:"LanguageCard_logo__2Szcz",lang:"LanguageCard_lang__3VPyD",questions:"LanguageCard_questions__2ZxHM",emptyImg:"LanguageCard_emptyImg__3AzZF"}},28:function(e,t,a){e.exports={container:"EndTest_container__2AOoL",modal:"EndTest_modal__2XNAg",text:"EndTest_text__1NarC",controls:"EndTest_controls__1q1DF",btn:"EndTest_btn__3Z8Xv"}},29:function(e,t,a){e.exports={container:"TestPage_container__oiHGv",loader:"TestPage_loader__IKkm-",testPageContainer:"TestPage_testPageContainer__gry3g",background:"TestPage_background__39Geu",bigBackground:"TestPage_bigBackground__95un_"}},3:function(e,t,a){e.exports={container:"ResultDiagram_container__1jB-T",head:"ResultDiagram_head__1H78o",diagramm:"ResultDiagram_diagramm__1PNIe",digrammPercentage:"ResultDiagram_digrammPercentage__28fAr",wishes:"ResultDiagram_wishes__1HFSS",statistics:"ResultDiagram_statistics__38sse",bracket:"ResultDiagram_bracket__fJL7a",innerNumber:"ResultDiagram_innerNumber__2w5fg",link:"ResultDiagram_link__TdlI0"}},31:function(e,t,a){e.exports={container:"TestExplanation_container__29vat",title:"TestExplanation_title__1HA-r",text:"TestExplanation_text__FpmmO",button:"TestExplanation_button__2TQLj",innerContainer:"TestExplanation_innerContainer__1dNAM"}},32:function(e,t,a){e.exports={headerTest:"TestControl_headerTest__1k7-J",title:"TestControl_title__2FLPo",orderQuestion:"TestControl_orderQuestion__2mmbG",btn:"TestControl_btn__3m6tr"}},35:function(e,t,a){e.exports={firstBlock:"StatisticBlock_firstBlock__1k_nR",firstBlockImage:"StatisticBlock_firstBlockImage__3QZfg",firstBlockTextInfo:"StatisticBlock_firstBlockTextInfo__1LKuY",btnGoBack:"StatisticBlock_btnGoBack__1Elep"}},36:function(e,t,a){e.exports={secondBlock:"InformationBlock_secondBlock__1HqEg",secondBlockTitle:"InformationBlock_secondBlockTitle__ZI7T9",secondBlockDescription:"InformationBlock_secondBlockDescription__pLyPZ",btnStartTest:"InformationBlock_btnStartTest__1lPNX"}},39:function(e,t,a){e.exports={relative:"ResultPage_relative__3sfhZ",container:"ResultPage_container__3DJY_",background:"ResultPage_background__2dyb5"}},4:function(e,t,a){e.exports={container:"TestAnswer_container__1E4gm",label:"TestAnswer_label__3-FvP",labelCorrect:"TestAnswer_labelCorrect__3NGzX",labelIncorrect:"TestAnswer_labelIncorrect__1Ks1l",img:"TestAnswer_img__1VX3B",inputWrapper:"TestAnswer_inputWrapper__3S225",input:"TestAnswer_input__N7moV",mobileContainerButton:"TestAnswer_mobileContainerButton__15lbf",buttonContainer:"TestAnswer_buttonContainer__1LnuU",tabletContainerButton:"TestAnswer_tabletContainerButton__2XCHg",button:"TestAnswer_button__1PY4u",buttonConfirm:"TestAnswer_buttonConfirm__3KEm8 TestAnswer_button__1PY4u",buttonSkip:"TestAnswer_buttonSkip__2MCtR TestAnswer_button__1PY4u",wrapperImgInput:"TestAnswer_wrapperImgInput__1I-HD"}},47:function(e,t,a){e.exports={languageDescrPageContainer:"LanguageDescrPage_languageDescrPageContainer__1x9LM",loader:"LanguageDescrPage_loader__3u0z1"}},48:function(e,t,a){e.exports={textBlock_item:"TextBlockItem_textBlock_item__2oY1b"}},49:function(e,t,a){e.exports={paper:"TestQuestion_paper__1jyR6",text:"TestQuestion_text__3L8PV"}},50:function(e,t,a){e.exports={item:"AllTestContainer_item__2iO2q",span:"AllTestContainer_span__1qr6x"}},53:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/happyCat1.3aab5c4a.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/happyCat2.ec2e6309.png"},78:function(e,t,a){e.exports=a.p+"static/media/happyCat3.34d25416.png"},79:function(e,t,a){e.exports=a.p+"static/media/pensive\u0421at1.37e1338f.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/pensiveCat2.0560620b.png"},81:function(e,t,a){e.exports={shadowDepth1:"BoxShadow_shadowDepth1__-7CdX",shadowDepth2:"BoxShadow_shadowDepth2__1Ecij",shadowDepth3:"BoxShadow_shadowDepth3__Xaouy",shadowDepth4:"BoxShadow_shadowDepth4__ubtpE",shadowDepth5:"BoxShadow_shadowDepth5__124iZ",shadowDepth6:"BoxShadow_shadowDepth6__NMFdc",shadowDepth7:"BoxShadow_shadowDepth7__3Z2XQ",shadowDepth8:"BoxShadow_shadowDepth8__2LG68",shadowDepth9:"BoxShadow_shadowDepth9__5z0BG",shadowDepth10:"BoxShadow_shadowDepth10__p8qWk",shadowDepth11:"BoxShadow_shadowDepth11__2czx7",shadowDepth12:"BoxShadow_shadowDepth12__1tuaX",shadowDepth13:"BoxShadow_shadowDepth13__1Nq68",shadowDepth14:"BoxShadow_shadowDepth14__2JspT",shadowDepth15:"BoxShadow_shadowDepth15__1f9mG",shadowDepth16:"BoxShadow_shadowDepth16__3YRvJ",shadowDepth17:"BoxShadow_shadowDepth17__2QfE2",shadowDepth18:"BoxShadow_shadowDepth18__3Ia4c",shadowDepth19:"BoxShadow_shadowDepth19__1U6K7",shadowDepth20:"BoxShadow_shadowDepth20__2nk6C",shadowDepth21:"BoxShadow_shadowDepth21__3ZkGy",shadowDepth22:"BoxShadow_shadowDepth22__3Xys3",shadowDepth23:"BoxShadow_shadowDepth23__2puts",shadowDepth24:"BoxShadow_shadowDepth24__2pr24"}},82:function(e,t,a){e.exports={simple:"Button_simple__2e5HF",contained:"Button_contained__394oz Button_simple__2e5HF",outlined:"Button_outlined__vKBo6 Button_simple__2e5HF"}},83:function(e,t,a){e.exports={image:"NewTestImage_image__un1GE"}},88:function(e,t,a){e.exports=a(153)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.e2dfc77c.chunk.js.map