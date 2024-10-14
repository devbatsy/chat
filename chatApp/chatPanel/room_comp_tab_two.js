import { __c, __SYD , __sC , SYD_VAR , __p} from "../sydneyDom_v2.js";

__SYD.chat_main_tab_2 = () =>{
    const check = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);
    return __c(
        "div",
        {
            style:`height:100%;min-width:250px;width:30%;max-width:300px;display:${check ? 'flex' : 'none'};row-gap:25px;flex-direction:column;` + __sC['b_rad_l1']()
        },
        [
            __SYD.chatApp_tab_two_search_tab_desktop(),
            __SYD.chatApp_tab_two_group_tab_desktop(),
            __SYD.chatApp_tab_two_peope_tab_desktop()
        ]
    )
}

__SYD.chatApp_tab_two_search_tab_desktop = () =>{
    return __c(
        "div",
        {
            style:"min-height:50px;width:100%;background:#fff;display:flex;column-gap:5px;padding:8px 10px;align-items:center;" + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
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
                    style:"height:100%;width:100%;padding-left:10px;font-size:16px;font-family:jose;",
                    class:'chatApp_tab_two_search_tab_desktop_input',
                    placeholder:'Search Contacts or groups'
                }
            )
        ]
    )
}

__SYD.chatApp_tab_two_group_tab_desktop = () =>{
    return __c(
        "div",
        {
            style:"min-height:200px;width:100%;background:#fff;padding:8px;padding-right:12px;display:flex;flex-direction:column;row-gap:10px;" + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "p",
                {
                    style:`font-size:17px;text-transform:capitalize;font-weight:500;`
                },
                [
                    'groups'
                ]
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;overflow:scroll;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;",
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info(),
                    __SYD.chatAppfrontier_group_info(),

                ]
            )
        ]
    )
}

__SYD.chatApp_tab_two_peope_tab_desktop = () =>{
    return __c(
        "div",
        {
            style:"height:100%;width:100%;background:#fff;padding:8px;padding-right:12px;display:flex;flex-direction:column;row-gap:10px;" + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "p",
                {
                    style:`font-size:17px;text-transform:capitalize;font-weight:500;`
                },
                [
                    'chat'
                ]
            ),

            __c(
                "div",
                {
                    style:"height:100%;width:100%;overflow:scroll;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;",
                    class:"tab_two_desktop_scroll_tab"
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