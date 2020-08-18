import React from 'react';
import { Input, Button } from 'antd';

class InputWrapped extends React.Component {
    render() {
        return <Input ref={this.props.fwRef} />
    }
}

const InputWrappedForwarded = React.forwardRef((props, ref) => <InputWrapped {...props} fwRef={ref} />)

const ChildrenHooks = ({ children }) => {
    // console.log(children && children.length, children);
    console.log(React.Children.toArray(children).length);

    return children || null;
}

class Lesson1 extends React.PureComponent {
    refInput = null;

    handleInputFocus = () => {
        this.refInput && this.refInput.focus && this.refInput.focus();
    }


    render() {
        return <div>
            <Button onClick={this.handleInputFocus}>FOCUS ME. NOT ME, INPUT</Button>
            <InputWrappedForwarded ref={node => node && (this.refInput = node)} />
            {/* {React.createElement(ChildrenHooks, {}, 'HELLO')}
            {React.createElement(ChildrenHooks, {}, [<div>TEST1</div>, <div>TEST2</div>])}
            {React.createElement(ChildrenHooks, {}, <div>TEST1</div>, <div>TEST2</div>)} */}
            <ChildrenHooks>
                HELLO
            </ChildrenHooks>
            <ChildrenHooks>
                <div>TEST</div>
            </ChildrenHooks>
            <ChildrenHooks />
            <ChildrenHooks>
                <div>TEST1</div>
                <div>TEST2</div>
            </ChildrenHooks>
        </div>
    };
}

export default Lesson1;