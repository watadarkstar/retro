import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import Item from "./Item";
import ItemInput from "./ItemInput";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    title: `item ${k}`,
    value: k % 5,
    cost: k % 5
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={classes.list}
              >
                <ItemInput />
                {this.state.items.map((item, index) => (
                  <Item key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
