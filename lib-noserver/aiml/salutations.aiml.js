var data="<?xml version='1.0' encoding='UTF-8'?><aiml version='1.0'><!-- --><!-- Free software (c) 2011 ALICE A.I. Foundation.   --><!-- This program is open source code released under --><!-- the terms of the GNU General Public License     --><!-- as published by the Free Software Foundation.   --><!-- Complies with AIML 1.0 Tag Set Specification --><!-- as adopted by the ALICE A.I. Foundation.  --><!-- Last modified 10/5/2011 --><!-- --><category><pattern>GOODBY</pattern><template><srai>bye</srai></template></category><category><pattern>END</pattern><template><srai>bye</srai></template></category><category><pattern>BYEBYE *</pattern><template><srai>bye</srai></template></category><category><pattern>HASTA LUEGO</pattern><template><srai>bye</srai></template></category><category><pattern>HASTA LA VISTA</pattern><template><srai>bye</srai></template></category><category><pattern>HASTA *</pattern><template><srai>bye</srai></template></category><category><pattern>ALOH</pattern><template><srai>hello</srai></template></category><category><pattern>YOU ARE WELCOME</pattern><template><random><li>The pleasure was all mine.</li><li>Don't mention it.</li><li>Polite people are nice.</li></random></template></category><category><pattern>YOU ARE WELCOME *</pattern><template>It was my pleasure.</template></category><category><pattern>HAVE A GOOD NIGHT</pattern><template><srai>bye</srai></template></category><category><pattern>HAVE TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>BUHBYE</pattern><template><srai>bye</srai></template></category><category><pattern>ADIOS</pattern><template><srai>bye</srai></template></category><category><pattern>ADIOS *</pattern><template><srai>bye</srai></template></category><category><pattern>C YA</pattern><template><srai>bye</srai></template></category><category><pattern>MORNING</pattern><template><srai>good morning</srai></template></category><category><pattern>SHALOM</pattern><template>Does SHALOM mean Hello or Goodbye?</template></category><category><pattern>CYA *</pattern><template><srai>bye</srai></template></category><category><pattern>ALLO</pattern><template><srai>hello</srai></template></category><category><pattern>HI THERE *</pattern><template><sr/>     <srai>hello</srai></template></category><category><pattern>GOODNITE *</pattern><template><srai>goodnight</srai></template></category><category><pattern>RETRY</pattern><template><srai>hello</srai></template></category><category><pattern>MY PLEASRE</pattern><template>The pleasure was indeed mine.</template></category><category><pattern>IT MEANS HELLO</pattern><template><srai>hello</srai></template></category><category><pattern>IT IS GOOD TALKING TO YOU</pattern><template>Nice chatting with you too, <get name='name'/>.</template></category><category><pattern>CATCH YOU LATER</pattern><template><srai>bye</srai></template></category><category><pattern>AUREVOIR</pattern><template><srai>bye</srai></template></category><category><pattern>ANYBODY HOME</pattern><template><srai>hello</srai></template></category><category><pattern>G2G</pattern><template><srai>bye</srai></template></category><category><pattern>WHAT IS SHALOM</pattern><template>Does shalom mean hello or goodbye?</template></category><category><pattern>GTG</pattern><template><srai>bye </srai></template></category><category><pattern>I QUIT</pattern><template><srai>bye</srai></template></category><category><pattern>I WANT TO LEAVE</pattern><template>Ok, bye bye.</template></category><category><pattern>I NEED TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>I DO NOT WANT TO TALK *</pattern><template><srai>bye</srai></template></category><category><pattern>I LEAVE</pattern><template><srai>bye</srai></template></category><category><pattern>I G2G</pattern><template><srai>bye</srai></template></category><category><pattern>I GOING</pattern><template><srai>bye</srai></template></category><category><pattern>I LEAVING</pattern><template><srai>bye</srai></template></category><category><pattern>I HAVE TO GET GOING</pattern><template><srai>goodbye</srai></template></category><category><pattern>I HAVE TO LEAVE</pattern><template><srai>bye</srai></template></category><category><pattern>I HAVE TO LEAVE *</pattern><template><srai>bye</srai></template></category><category><pattern>I HAVE TO GO BYE</pattern><template><srai>bye</srai></template></category><category><pattern>I HAVE GOT TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>I BETTER GO</pattern><template><srai>bye</srai></template></category><category><pattern>I GOTTA GO</pattern><template><srai>bye</srai></template></category><category><pattern>I GOT TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>I G TWO G</pattern><template><srai>bye</srai></template></category><category><pattern>I RESIGN</pattern><template><srai>bye</srai></template></category><category><pattern>I MUST BE GOING *</pattern><template><srai>bye</srai></template></category><category><pattern>I MUST LEAVE</pattern><template><srai>bye</srai></template></category><category><pattern>I MUST LEAVE *</pattern><template><srai>bye</srai> <sr/></template></category><category><pattern>I MUST GO *</pattern><template><srai>bye</srai></template></category><category><pattern>I WILL TALK TO YOU LATER *</pattern><template><srai>bye</srai></template></category><category><pattern>I AM GOING TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>I AM GOING *</pattern><template><srai>bye</srai></template></category><category><pattern>I AM LEAVING *</pattern><template><srai>bye</srai></template></category><category><pattern>I AM OFF *</pattern><template><srai>bye</srai></template></category><category><pattern>I LEFT</pattern><template><srai>bye</srai></template></category><category><pattern>I GO</pattern><template><srai>bye</srai></template></category><category><pattern>EXIT</pattern><template><srai>bye</srai></template></category><category><pattern>GOOD MORNING</pattern><template>Hello and how are you this morning?</template></category><category><pattern>GOOD BY</pattern><template><srai>bye</srai></template></category><category><pattern>GOOD DAY</pattern><template><srai>hello</srai></template></category><category><pattern>GOOD NIGHT</pattern><template>Goodnight, <get name='name'/>.</template></category><category><pattern>GOOD NITE</pattern><template><srai>bye</srai></template></category><category><pattern>HOI</pattern><template><srai>hello</srai></template></category><category><pattern>BY BY</pattern><template><srai>bye</srai></template></category><category><pattern>IS ANYONE THERE</pattern><template><srai>hello</srai></template></category><category><pattern>GET LOST</pattern><template><srai>bye</srai></template></category><category><pattern>HEY THERE</pattern><template><srai>hello</srai></template></category><category><pattern>BYE BYE</pattern><template><srai>bye</srai></template></category><category><pattern>BYE BYE *</pattern><template><srai>bye</srai></template></category><category><pattern>BYE</pattern><template><random>      <li>Bye.</li>      <li>Adios.</li>      <li>Goodbye.</li>      <li>Bye bye.</li>      <li>Goodbye.</li>      <li>Sayonara.</li>      <li>Bye for now.</li>      <li>See you later!</li>      <li>See you later.</li>      <li>Until next time.</li>      <li>TTYL, <get name='name'/>.</li>      <li>See you later <get name='name'/>.</li>      <li>Thanks for chatting, <get name='name'/>.</li>     </random></template></category><category><pattern>OLA</pattern><template><srai>hello</srai></template></category><category><pattern>HOW IS EVERYONE *</pattern><template>We are all fine as far as I know.</template></category><category><pattern>GOODNIGHT</pattern><template>Goodnight <get name='name'/></template></category><category><pattern>GOODNIGHT *</pattern><template><srai>goodnight</srai></template></category><category><pattern>FAREWELL</pattern><template><srai>bye</srai></template></category><category><pattern>FAREWELL *</pattern><template><srai>bye</srai></template></category><category><pattern>SEE YOU SOON</pattern><template><srai>bye</srai></template></category><category><pattern>SEE YOU *</pattern><template><srai>bye</srai></template></category><category><pattern>KONNICHI WA</pattern><template><srai>hello</srai></template></category><category><pattern>ADIEU</pattern><template><srai>good bye</srai></template></category><category><pattern>GOODBYE</pattern><that>SEE YOU LATER</that><template><srai>bye</srai></template></category><category><pattern>GO HOME</pattern><template><srai>bye</srai></template></category><category><pattern>CIAO</pattern><template>Does CIAO mean hello or goodbye?</template></category><category><pattern>CIAO MEANS GOODBYE</pattern><template><srai>but</srai></template></category><category><pattern>HOLA IS HELLO *</pattern><template><srai>hola</srai></template></category><category><pattern>CHEERS</pattern><template><srai>bye</srai></template></category><category><pattern>HOWDIE *</pattern><template><srai>hello</srai>     <sr/></template></category><category><pattern>TIME TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>YOUR WELCOME *</pattern><template><srai>you are welcome</srai></template></category><category><pattern>SAYONARA</pattern><template><srai>good bye</srai></template></category><category><pattern>NIGHTY *</pattern><template><srai>bye </srai></template></category><category><pattern>HELLO AGAIN</pattern><template>Hi there. I was just wanting to talk to <get name='name'/>.</template></category><category><pattern>HELLO HOW ARE YOU</pattern><template>I am fine thank you how are you?</template></category><category><pattern>HELLO</pattern><template><random><li><srai>HI</srai></li><li>Hi there!</li></random></template></category><category><pattern>HULLO</pattern><template><srai>hello</srai></template></category><category><pattern>HALO</pattern><template><srai>hello</srai></template></category><category><pattern>HELOO *</pattern><template><srai>hello <star/></srai></template></category><category><pattern>* BYE</pattern><template>OK see you later <get name='name'/>.</template></category><category><pattern>KONNICHIWA</pattern><template><srai>hello</srai></template></category><category><pattern>DISCONNECT ME</pattern><template><srai>bye</srai></template></category><category><pattern>GOT TO GO</pattern><template><srai>bye</srai></template></category><category><pattern>GOT TO GO *</pattern><template><srai>bye</srai></template></category><category><pattern>MOOSHI MOOSHI</pattern><template><srai>hello</srai></template></category><category><pattern>BONJOUR MEANS HELLO</pattern><template>Well hello there!</template></category><category><pattern>GOTTA GO</pattern><template><srai>bye</srai></template></category><category><pattern>GOTTA GO *</pattern><template><srai>bye</srai></template></category><category><pattern>LEAVE</pattern><template><srai>bye</srai></template></category><category><pattern>LEAVE *</pattern><template><srai>bye</srai></template></category><category><pattern>TA TA</pattern><template><srai>bye</srai></template></category><category><pattern>_ TALK TO YOU LATER</pattern><template><srai>bye </srai></template></category><category><pattern>G NIGHT</pattern><template><srai>bye</srai></template></category><category><pattern>ALOHA</pattern><template><srai>hello</srai></template></category><category><pattern>REPLY</pattern><template><srai>hello</srai></template></category></aiml>";