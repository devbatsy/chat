import { __sC, __sS, __SYD , __c , SYD_VAR, __p, __g, __u, __v} from "../sydneyDom_v2.js";
import {tab1_switch_function} from "../routeComponent.js";


__SYD.chat_main_tab_2_mobile = () =>{
    const check = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);
    const check2 = __p(['chatMainPanel' , 'displayTab3_text_display_area'],false);

    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:#fff;overflow:scroll;padding:20px;display:${!check && !check2 ? 'flex' : 'none'};` + __sC['signUp_model_shadow']() + __sC['b_rad_l1']()
        },
        [
            __SYD.chatApp_tab_two_group_tab_mobile(),
            __SYD.chatApp_tab_two_people_tab_mobile(),
        ],
        {
            createState:{
                stateName:'chat_main_tab_2_mobile',
                state:{
                    currentDisplay:"0"
                }
            }
        }
    )
}



//MAIN TABS FOR CONTACT AND GROUPS
__SYD.chatApp_tab_two_group_tab_mobile = () =>{
    const check = __p(['chat_main_tab_2_mobile' , 'currentDisplay'],"0") === "1";

    return __c(
        "div",
        {
            style:`min-height:200px;width:100%;background:#fff;display:${check ? 'flex' : 'none'};flex-direction:column;row-gap:20px;`
        },
        [
            __c(
                "div",
                {
                    style:`display:flex;flex-direction:row-reverse;padding:8px 0;justify-content:space-between;align-items:center;font-size:17px;text-transform:capitalize;font-weight:500;position:relative;border-bottom:1px solid ${SYD_VAR.plum};`
                },
                [

                    __SYD.display_mobile_menu_icon("chat_room_menu_tab_mobile_group"),

                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:18px;font-weight:700;color:${SYD_VAR.gold};text-transform:uppercase;`
                        },
                        [
                            'App title'
                        ]
                    ),

                    __SYD.chat_room_menu_tab_mobile_group()
                ]
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;padding-top:10px;",
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info()

                ]
            )
        ]
    )
}


__SYD.chatApp_tab_two_people_tab_mobile = () =>{
    const check = __p(['chat_main_tab_2_mobile' , 'currentDisplay'],"0") === "0";

    return __c(
        "div",
        {
            style:`min-height:200px;width:100%;background:#fff;display:${check ? 'flex' : 'none'};flex-direction:column;row-gap:20px;`
        },
        [
            __c(
                "div",
                {
                    style:`display:flex;flex-direction:row-reverse;padding:8px 0;justify-content:space-between;align-items:center;font-size:17px;text-transform:capitalize;font-weight:500;position:relative;border-bottom:1px solid ${SYD_VAR.plum}`
                },
                [
                    __SYD.display_mobile_menu_icon("chat_room_menu_tab_mobile_contact"),

                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:18px;font-weight:700;color:${SYD_VAR.gold};text-transform:uppercase;`
                        },
                        [
                            'App title'
                        ]
                    ),

                    __SYD.chat_room_menu_tab_mobile_contact()
                ]
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;padding-top:10px;overflow:scroll",
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    __SYD.chatAppfrontier_people_info(),
                    __SYD.chatAppfrontier_people_info(),
                    __SYD.chatAppfrontier_people_info(),
                    __SYD.chatAppfrontier_people_info(),

                ]
            )
        ]
    )
}




//search tab init

__SYD.chatApp_tab_two_search_tab_mobile_group = () =>{
    return __c(
        "div",
        {
            style:`min-height:50px;width:100%;background:${SYD_VAR.sand};display:flex;column-gap:5px;padding:8px 10px;align-items:center;` + __sC['b_rad_l1']()// + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "i",
                {
                    style:`font-size:20px;color:${SYD_VAR.plum_light_grey};` + __sC['icon_style_20'](),
                    class:"fa-solid fa-magnifying-glass-arrow-right"
                }
            ),

            __c(
                "input",
                {
                    style:"height:100%;width:100%;padding-left:10px;font-size:16px;font-family:jose;background:unset;",
                    class:'chatApp_tab_two_search_tab_desktop_input',
                    placeholder:'Search your groups'
                }
            )
        ],
        {
            createState:{
                stateName:'chatApp_tab_two_search_tab_mobile',
            }
        }
    )
}






//MOBILE MENU FOR CONTACT AND GROUP PAGE COMPONENT

__SYD.chat_room_menu_tab_mobile_contact = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['chat_room_menu_tab_mobile_contact' , 'display_menu_tab'] , false);

    const checkmenuState = __p(['chat_main_tab_1' , 'tab1_current'] , "0");
    

    return __c(
        "div",
        {
            style:`display:${!check && check_2 ? 'flex' : 'none'};position:absolute;top:100%;right:0;padding:25px 10px;row-gap:20px;flex-direction:column;background:#fff;z-index:999;width:200px;outline:none;` + __sC['signUp_model_shadow']() + __sC['b_rad_l1'](),
            tabindex:"1",
            class:'dropDownEntryAnimation'
        },
        [
            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "home"
                ],{events:{onclick:(e) =>{tab1_switch_function("0",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "chats"
                ],{events:{onclick:(e) =>{tab1_switch_function("1",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "notification"
                ],{events:{onclick:(e) =>{tab1_switch_function("2",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "settings"
                ],{events:{onclick:(e) =>{tab1_switch_function("3",e)}}}
            ),
        ],
        {
            createState:{
                stateName:'chat_room_menu_tab_mobile_contact',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('chat_room_menu_tab_mobile_contact');
                    state.display_menu_tab = false;
                    __u('chat_room_menu_tab_mobile_contact' , {type:'a' , value:state});
                }
            }
        }
    )
}

__SYD.chat_room_menu_tab_mobile_group = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['chat_room_menu_tab_mobile_group' , 'display_menu_tab'] , false);

    const checkmenuState = __p(['chat_main_tab_1' , 'tab1_current'] , "0");


    return __c(
        "div",
        {
            style:`display:${!check && check_2 ? 'flex' : 'none'};position:absolute;top:100%;right:0;padding:25px 10px;row-gap:20px;flex-direction:column;background:#fff;z-index:999;width:200px;outline:none;` + __sC['signUp_model_shadow']() + __sC['b_rad_l1'](),
            tabindex:"1",
            class:'dropDownEntryAnimation'
        },
        [
            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "home"
                ],{events:{onclick:(e) =>{tab1_switch_function("0",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "chats"
                ],{events:{onclick:(e) =>{tab1_switch_function("1",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "notification"
                ],{events:{onclick:(e) =>{tab1_switch_function("2",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "settings"
                ],{events:{onclick:(e) =>{tab1_switch_function("3",e)}}}
            ),
        ],
        {
            createState:{
                stateName:'chat_room_menu_tab_mobile_group',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('chat_room_menu_tab_mobile_group');
                    state.display_menu_tab = false;
                    __u('chat_room_menu_tab_mobile_group' , {type:'a' , value:state});
                }
            }
        }
    )
}
