/**
 * 使用结构
 *     <tabs>
 *          <div tabName="标题1">
 *              <div>内容1</div>
 *          </div>
 *          <div tabName="标题2">
 *              <div>内容2</div>
 *          </div>
 *     <tabs>
 * 
 * 渲染结构
 *     <ul>
 *          <li>标题1</li>
 *          <li>标题2</li>
 *     <ul>
 *     <div>
 *          <div>内容1</div>
 *          <div>内容2</div>
 *     </div>
 * 
 */

import React from "react"
import "./style.less"

export default class Tabs extends React.Component{

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    clickTabHandle = (index) =>{
        this.setState({
            currentIndex:index
        })
    }

    check_title_index(index){
        return this.state.currentIndex === index ? 'Tab_title active' :  "Tab_title"
    }

    check_item_index(index){
        return this.state.currentIndex === index ? 'show' : 'hide'
    }


    render(){
        return(
            <div>
                <ul className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return <li onClick={ () =>{ this.clickTabHandle(index) } } className={ this.check_title_index(index) }>{ element.props.tabName }</li>
                        })
                    }
                </ul>
                <div>
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return(
                                <div className={ this.check_item_index(index) }>
                                    { element.props.children }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}