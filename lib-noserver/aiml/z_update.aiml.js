var data="<?xml version='1.0' encoding='UTF-8'?><aiml><!-- File: reductions3.aiml --><!-- Last modified: July 27, 2016 --><!--  --><!-- This AIML file is part of the Rosie knowledge base. --><!--  --><!-- Rosie is a fork of the ALICE2 brain, and is optimized for use on the Pandorabots platform --><!--  --><!-- Rosie is Copyright &copy; 2014 by Pandorabots, Inc. --><!--  --><!-- The Rosie brain is released under the terms of the GNU Lesser General --><!-- Public License, as published by the Free Software Foundation. --><!--  --><!-- This file is distributed WITHOUT ANY WARRANTY; without even the  --><!-- implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.   --><!--  --><!-- For more information: --><!-- http://www.pandorabots.com --><!--  http://www.alicebot.org --><!--  --><category><pattern>GENDERNAME <set>name</set></pattern><template><map><name>gendername</name><star/></map></template></category><category><pattern>GENDERNAME *</pattern><template>unknown</template></category><!-- GITHUB ISSUE FIX --><category><pattern>WHAT IS WHAT</pattern><template>Well, that makes no sense.</template></category></aiml>";