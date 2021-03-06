import * as React from 'ng-vdom'
import { render } from 'ng-vdom/bootstrap'
import { generate } from '../utils/element'

function demo_0() {
  const container = generate()

  function Clock(props: { date: Date }) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

  function tick() {
    render(
      <Clock date={new Date()} />,
      container,
    )
  }

  setInterval(tick, 1000)
}

function demo_1() {
  const container = generate()

  class Clock extends React.Component<{ date: Date }> {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  function tick() {
    render(
      <Clock date={new Date()} />,
      container,
    )
  }

  setInterval(tick, 1000)
}

function demo_2() {
  class Clock extends React.Component<any, { date: Date }> {
    constructor(props: any) {
      super(props)
      this.state = {date: new Date()}
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  render(
    <Clock />,
    generate(),
  )
}

function demo_3() {
  class Clock extends React.Component<any, { date: Date }> {
    timerID!: number

    constructor(props: any) {
      super(props)
      this.state = {date: new Date()}
    }

    componentDidMount() {
      this.timerID = window.setInterval(
        () => this.tick(),
        1000,
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        date: new Date(),
      })
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  render(
    <Clock />,
    generate(),
  )
}

function demo_4() {
  function FormattedDate(props: { date: Date }) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
  }

  class Clock extends React.Component<any, { date: Date }> {
    timerID!: number

    constructor(props: any) {
      super(props)
      this.state = {date: new Date()}
    }

    componentDidMount() {
      this.timerID = window.setInterval(
        () => this.tick(),
        1000,
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        date: new Date(),
      })
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      )
    }
  }

  render(
    <Clock />,
    generate(),
  )
}

function demo_5() {
  function FormattedDate(props: { date: Date }) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
  }

  class Clock extends React.Component<any, { date: Date }> {
    timerID!: number

    constructor(props: any) {
      super(props)
      this.state = {date: new Date()}
    }

    componentDidMount() {
      this.timerID = window.setInterval(
        () => this.tick(),
        1000,
      )
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        date: new Date(),
      })
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      )
    }
  }

  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    )
  }

  render(<App />, generate())
}

demo_0()
demo_1()
demo_2()
demo_3()
demo_4()
demo_5()
