/**
 * author: duxin
 * date: 2020/5/18
 * describe: 渲染icons按钮
 */

function hasShowIcon(params, key) {
    if (!params.row.hasOwnProperty(key)) {
        return true
    } else {
        return params.row[key]
    }
}

export function renderIcons(iconsList) {
    return (h, params) => {
        let buttonList = [];
        for (let i = 0; i < iconsList.length; i++) {
            let hasShowIcon = hasShowIcon(params, iconsList[i].key);
            if (!hasShowIcon) {
                continue
            }
            buttonList.push(h(
                "Icon",
                {
                    // 文字提示
                    attrs: {
                        title: iconsList[i].title,
                    },
                    style: {
                        cursor: "pointer",
                        color: iconsList[i].color,
                        fontSize: "22px"
                    },
                    on: {
                        click: () => {
                            if (typeof iconsList[i].onClick === "function")
                                iconsList[i].onClick(params)
                        }
                    }
                },
            ));
            buttonList.push(h(
                "div",
                {
                    style: {
                        width: "1px",
                        height: "14px",
                        backgroundColor: "#8A8C92",
                        marginLeft: "8px",
                        marginRight: "8px",
                        lineHeight: "14px"
                    }
                }
            ))
        }
        buttonList.pop();
        return h(
            "div",
            {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "wrap"
                }
            },
            buttonList
        )
    }
}