var answers = ["1","show ipv6 ospf neighbor","link-state database","LSU","FE80::1","FF02::6","FF02::5","Correct Answer: cost","to uniquely identify the router within the OSPF domain","to facilitate router participation in the election of the designated router","The OSPFv3 process will be assigned an ID of 64.","They exchange abbreviated lists of their LSDBs.","Completion!","mismatched OSPF Hello or Dead timers","mismatched subnet masks on the link interfaces","an Ethernet interface MAC address available on the router, the FE80::/10 prefix, and the EUI-64 process","ipv6 ospf 20 area 0","Correct Answer: multiaccess","show ipv6 route ospf","show ip protocols","cost","dissemination of LSAs","adjacency database","ipv6 router ospf 10","any IP address that is configured using the router-id command","192.168.10.0/24","172.16.0.0/16","Automatic summarization is disabled on R3.","A default route is being learned through an external process.","It reduces the frequency of routing updates.","It ensures that traffic for multiple subnets uses one path through the internetwork.","It decreases the number of entries in the routing table.","10.1.2.0/24","10.1.4.0/30","2001:DB8:8000::/34","reduces total number of routes in routing tables","A static default route was configured on this router.","The command redistribute static has not been issued on R1.","router configuration mode","ip bandwidth-percent eigrp 100 75","serial 0/1/0 of R2","serial 0/0/1 of R3","The same autonomous system numbers must be used in the interface configurations of each router.","an access list that is blocking advertisements from other networks","The GigabitEthernet 0/1 interface is not participating in the EIGRP process.","The IPv4 address configured on the neighbor that is connected to R1 serial 0/1/0 is incorrect.","Configure both routers with the same EIGRP process ID.","to prevent routing loops","170","The configuration supports unequal-cost load balancing.","Any EIGRP-learned route with a metric less than 3 times the successor metric will be installed in the local routing table.","ip bandwidth-percent eigrp 100 8","4","The keychain for EIGRP authentication must be configured on the interfaces.","EIGRP authentication uses the MD5 algorithm.","EIGRP authentication uses a pre-shared key.","autonomous system number","show ip protocols","EIGRP is down on R1.","because the Fa0/0 interface of R1 is declared as passive for EIGRP","when the routers in an IPv4 network are connected to discontiguous networks with automatic summarization enabled","thisqwertyuiop123456789"];var option = document.getElementsByClassName("ai-option");for(i = 0;i<option.length;i++) {for(j = 0;j<answers.length;j++) {if(option[i].innerHTML.replace("<b>","").replace("</b>","")==answers[j]){option[i].style.cursor = "wait";break;}}}