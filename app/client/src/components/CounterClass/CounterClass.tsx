import React from 'react';
import { Box, Title, SubTitle, Button } from './styled';
import { DataContext } from '@app/context';

interface Props {
  initialCount?: number;
}

interface State {
  count?: number;
  width?: number;
}

//- Container Component

class CounterContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
      width: window.innerWidth
    };
  }

  static defaultProps = {
    initialCount: 0
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    })
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    return(
      <React.Fragment>
        <DataContext.Consumer>
          { data => (
            <Title>{data.title}</Title>
          )}
        </DataContext.Consumer>
        <CounterButton onIncrement={this.increment} count={this.state.count} />
        <Box>
          <SubTitle>Width:</SubTitle>
          <SubTitle>{this.state.width}</SubTitle>
        </Box>
      </React.Fragment>
    );
  }
}

//- Presentational Component

const CounterButton: React.SFC<any> = ({ onIncrement, count }) => (
  <React.Fragment>
    <SubTitle>Count:</SubTitle>
    <Button onClick={onIncrement}>{count}</Button>
  </React.Fragment>
);

export { CounterContainer }