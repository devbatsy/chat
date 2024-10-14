import { __sS, __SYD, SYD_VAR  , __c , __g , __u , __sC, __p, __v} from "./sydneyDom_v2.js"
import "./variables.js"

__sS([
    {
        nameTag:'b_rad_l',
        style:{
            borderRadius:'30px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_l1',
        style:{
            borderRadius:'10px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_l2',
        style:{
            borderRadius:'7px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_18',
        style:{
            borderRadius:'18px'
        }
    }
])


__sS([
    {
        nameTag:"container",
        style:{
            height:'100vh',
            width:'100vw',
            background:'#fbeedb',
            position:'relative',
            overflow:'hidden',
            fontFamily:'jose'
        }
    }
])

__sS([
    {
        nameTag:"signUp_model_design_input",
        style:{
            height:'40px',
            minHeight:'40px',
            width:'100%',
            background:'unset',
            borderBottom:'1px solid #2D1A30',
            padding:'5px',
            borderRadius:'0px;'
        }
    },
    {
        nameTag:'signUp_model_shadow',
        style:{
            boxShadow:'2px 2px 3px rgba(0,0,0,.3)'
        }
    }
])

__sS([
    {
        nameTag:'icon_style_20',
        style:{
            minHeight:'20px',
            minWidth:'20px',
            maxHeight:'20px',
            maxWidth:'20px'
        }
    }
])

__sS([
    {
        nameTag:'icon_style_18',
        style:{
            minHeight:'18px',
            minWidth:'18px',
            maxHeight:'18px',
            maxWidth:'18px'
        }
    }
])

//REUSE COMPONENTS
__SYD.max_3 = ({text = '' , color = '#2D1A30' , width = '' , fontFamily = 'inherit'} = {}) =>{
    return __c(
        'div',
        {
            style:`font-size:25px;color:${color};font-weight:500;text-transform:capitalize;width:${width};font-family:${fontFamily};`,
            class:'capitalize_first_letter'
        },
        [
            text
        ]
    )
}
//REUSE COMPONENTS

__SYD.display_mobile_menu_icon = (componentName) =>{
    const compName = componentName
    const check_menu = __p(['chatMainPanel' , 'displayTab1'] , true);

    return __c(
        "i",
        {
            style:`display:${!check_menu ? 'block' : 'none'};font-size:18px;font-weight:900;color:${SYD_VAR.plum_light};` + __sC['icon_style_18'](),
            class:"fa-solid fa-grip-vertical"
        },[],{
            events:{
                onclick:e =>{
                    const state = __g(compName);
                    state.display_menu_tab = state.display_menu_tab ? false : true;
                    __u(compName , {type:'a' , value:state});

                    __v[compName].focus();
                }
            }
        }
    )
}


__SYD.chatAppfrontier_group_info = () =>{
    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;border-bottom:1px solid ${SYD_VAR.plum_light_grey}`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:30px;min-width:30px;max-height:30px;max-width:30px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:15px;display:flex;flex-direction:column;row-gap:5px;"
                },
                [
                    __c(
                        "span",
                        {
                            style:`height:15px;width:15px;position:absolute;bottom:0;right:0;background:${SYD_VAR.rose};border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:10px;color:${SYD_VAR.sand}`
                        },["5"]
                    ),


                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __SYD.norm_text_component({value:"group name" , style:`color:${SYD_VAR.plum};max-width:100px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;`}),
                            __c("p" , {style:'font-size:11px;font-weight:300'},['Today 9:52 PM']),
                        ]
                    ),


                    __SYD.norm_2_text_component({value:"Last recorded message" , style:`max-width:120px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`})
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    enter_message_tab();

                    const state = __g("chat_main_tab3_chat_screen");
                    state.chat_screen_mode = 'group';
                    __u('chat_main_tab3_chat_screen' , {type:"a" , value:state})
                }
            }
        }   
    )
}





__SYD.chatAppfrontier_people_info = () =>{
    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;border-bottom:1px solid ${SYD_VAR.plum_light_grey}`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:30px;min-width:30px;max-height:30px;max-width:30px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:15px;display:flex;flex-direction:column;row-gap:5px;"
                },
                [
                    __c(
                        "span",
                        {
                            style:`height:15px;width:15px;position:absolute;bottom:0;right:0;background:${SYD_VAR.rose};border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:10px;color:${SYD_VAR.sand}`
                        },["5"]
                    ),


                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __SYD.norm_text_component({value:"contact name" , style:`color:${SYD_VAR.plum};max-width:100px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;`}),
                            __c("p" , {style:'font-size:11px;font-weight:300'},['Today 9:52 PM']),
                        ]
                    ),


                    __SYD.norm_2_text_component({value:"Last recorded message" , style:`max-width:120px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`})
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    enter_message_tab();

                    const state = __g("chat_main_tab3_chat_screen");
                    state.chat_screen_mode = 'contact';
                    __u('chat_main_tab3_chat_screen' , {type:"a" , value:state})
                }
            }
        }   
    )
}






__SYD.chatAppfrontier_top_user_profile = () =>{
    const dummyName = __p(['chat_main_tab3_chat_screen' , 'chat_screen_mode'],"") === 'group' ? "group name" : 'contact name'
    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:45px;min-width:45px;max-height:45px;max-width:45px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:15px;display:flex;flex-direction:column;row-gap:5px;justify-content:center;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __c("p" , {style:'width:fit-content;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'},[`${dummyName}`]),
                        ]
                    ),


                    __c("p" , {style:`font-size:12px;width:fit-content;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`},[
                        __c('span' , {style:''},["online"]),
                        // " - Last Seen , ",
                        // __c('span' , {style:''},["2:02pm"]),
                    ]),
                ]
            )
        ],
        {
            events:{
                onclick: e =>{
                    const state = __g('room_chat_client_profile_display');
                    state.slideDisplay = true;
                    __u('room_chat_client_profile_display' , {type:"a" , value:state});

                    __v['room_chat_client_profile_display'].focus();
                }
            }
        }
    )
}



__SYD.clientMsg_tab = () =>{
    const check = __p(['chat_main_tab3_chat_screen' , 'chat_screen_mode'],'') === 'group';

    return __c(
        'div',
        {
            style:"height:fit-content;width:100%;display:flex;justify-content:flex-start;padding:5px 0;position:relative;",
            class:"clientMsg_tab"
        },
        [
            __c(
                "div",
                {
                    style:`padding: 10px;display:flex;flex-direction:column;width:100%;row-gap:5px;background:${"lightgrey"};border-radius:20px;border-top-left-radius:unset;max-width:min(70% , 300px)`
                },
                [
                    __SYD.norm_3_text_component({value:'sender\'s name' , style:`color:${SYD_VAR.rose};display:${check ? 'block' : 'none'};font-weight:500;text-transform:capitalize;`}),
                    __c(
                        'p',
                        {
                            style:`position:relative;width:fit-content;`
                        },
                        [
                            __SYD.norm_text_component({value:"Lorem ipsum, dolor sit amet consectetur adipisicing elit." , style:`color:${SYD_VAR.plum}`}),
                            __c("br") ,
                             __c("br") ,
                              __SYD.norm_text_component({value:"contact message here" , style:`color:${SYD_VAR.plum}`}),
                            __c("p" , {style:'position:absolute;top:calc(100% + 13px);left:3px;font-size:11px;font-weight:500'},['Today 9:52 PM']),
                        ]
                    )
                ]
            ),
        ]
    )
}



__SYD.UserMsg_tab = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:100%;display:flex;justify-content:flex-end;padding:5px 0;position:relative;margin-right:3px;`,
            class:"clientMsg_tab"
        },
        [
            __c(
                'p',
                {
                    style:`padding: 10px;background:lightgrey;position:relative;width:fit-content;border-radius:20px;border-top-right-radius:unset;max-width:min(70% , 300px);color:${SYD_VAR.sand};background:${SYD_VAR.plum_light}`
                },
                [
                    __SYD.norm_text_component({value:"Lorem ipsum, dolor sit amet consectetur adipisicing elit." , style:`color:${SYD_VAR.sand}`}),

                    __c("p" , {style:`color:${SYD_VAR.plum};position:absolute;top:calc(100% + 3px);right:18px;font-size:11px;font-weight:500`},['Today 9:52 PM']),
                    
                    __c(
                        'span',
                        {
                            style:`height:10px;width:10px;border-radius:50%;background:${SYD_VAR.plum_light};position:absolute;top:calc(100% + 3px);right:0px;`
                        }
                    ),
                ]
            )
        ]
    )
}

__SYD.norm_text_component = ({value = "" , style = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_text_size};${style};`,
            class:'edit1' 
        },
        [
            value
        ]
    )
}

__SYD.norm_2_text_component = ({value = "" , style = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_2_text_size};${style};` ,
            class:'edit2' 
        },
        [
            value
        ]
    )
}

__SYD.norm_3_text_component = ({value = "" , style = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_3_text_size};${style};`,
            class:'edit3' 
        },
        [
            value
        ]
    )
}







//FUNCTIONS REALM

function enter_message_tab()
{
    const checkAppMode = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);

    switch(checkAppMode)
    {
        case false:{
            const state = __g('chatMainPanel');
            state.displayTab3_text_display_area = true;
            __u("chatMainPanel" , {type:'a' , value:state})
        }
        case true:
            const state = __g('chat_main_tab_3');
            state.current_mini_display = "1"
            __u("chat_main_tab_3" , {type:'a' , value:state})
        break;
    }
}


export const tab1_switch_function = (i , el) =>{

    // el.target.parentElement.querySelectorAll('.hover_menu_icon').forEach(val =>{
    //     val.style.background = 'transparent'
    // })

    // console.log(el.target)

    // el.target.style.background = 'lightgrey'

    const state = __g('chat_main_tab_1');
    state.tab1_current = i;
    __u('chat_main_tab_1' , {type:'a' , value:state})

    const state2 = __g('chatMainPanel');
    state2.topLevelDisplay = i;
    __u('chatMainPanel' , {type:'a' , value:state2})
    
}


//ACCESS MEANS FOR ALL COMPONENTS IS THE CHAT MODE AND CHAT ID