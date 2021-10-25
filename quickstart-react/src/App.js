import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css"
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js"

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      boardData:null,
      statusCount:{}
    };
  }

  createCount() {
    let dict = {};
    this.state.boardData.boards[0].items.map(item => {
      let status = item.column_values[2].text
      if (dict[status]) {
        dict[status] += 1
      } else {
        dict[status] = 1
      }
    })
    this.setState({statusCount: dict});
    console.log(this.state.statusCount)
  }

  mapKey(key) {
    switch (key) {
      case 'primary':
        return 'Working on it';
      case 'success':
        return 'Done';
      case 'danger':
        return 'Stuck';
      case 'dark':
        return 'null';
      default:
        break;
    }
  }

  componentDidMount() {
    monday.listen("settings", res => {
      this.setState({ settings: res.data });
    });

    monday.listen("context", res => {
      this.setState({context: res.data});
      console.log(res.data);
      monday.api(`query { boards (ids:1825108644) {
                          items {
                            column_values {text}
                          }
        }
                }`,
        { variables: {boardIds: this.state.context.boardIds} }
      )
      .then(res => {
        this.setState({boardData: res.data});
        this.createCount();
        console.log(this.state.boardData)
      });
    })
  }

  render() {
    return <div className="App" style={{background:this.state.settings.background}}>
      <AttentionBox
        title="--Check Your Status Count(s) Here--"
        text="Select a 'status type' from the drop-down menu on the right to get started!"
        text={"Status Count: " + (this.state.statusCount[this.mapKey(this.state.settings.statusType)] || 0)}
        type={this.state.settings.statusType}
      />
    </div>;
  }
}

export default App;
