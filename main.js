import {Component, ToyReact} from "./ToyReact"

class MyComponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>World!</span>
            <div>
                {this.children}
            </div>
        </div>
    }

}

let a = <MyComponent name="a" id="ida">
    <div>1234</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)