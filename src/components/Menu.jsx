import React, { Component } from "react";
import "./Menu.scss";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState(state => ({
      open: !state.open
    }));
  }
  render() {
    const linksArray = [
      { name: "buy", url: "/buy" },
      { name: "sell", url: "/sell" },
      { name: "rent", url: "/rent" },
      { name: "short let", url: "/shortlet" }
    ];

    return (
      <div>
        <Panel open={this.state.open} links={linksArray} />
        <Button toggle={this.toggleMenu} open={this.state.open} />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button
        className={
          this.props.open ? "menu-toggle close-button" : "menu-toggle "
        }
        onClick={this.props.toggle}
      >
        {" "}
        <i className="fa fa-plus"></i>
      </button>
    );
  }
}

class Panel extends Component {
  render() {
    return (
      <div
        className={this.props.open ? "menu-wrapper menu-open" : "menu-wrapper"}
      >
        <Links links={this.props.links} open={this.props.open} />
      </div>
    );
  }
}

class Links extends Component {
  render() {
    const linkList = this.props.links.map(link => (
      <li className="link" key={link.name}>
        <a href={link.url}>{link.name}</a>
      </li>
    ));
    return (
      <div
        className={
          this.props.open
            ? "links-wrapper"
            : "links-wrapper links-wrapper-closed"
        }
      >
        {" "}
        <ul className="link-list">{linkList}</ul>
      </div>
    );
  }
}
