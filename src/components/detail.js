import React from "react";
import getDetail from "../entities/Detail";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
export default class Detail extends React.Component {
  state = {
    id: null,
    title: "",
    description: "",
    favorite: false,
    content: ""
  };

  componentDidMount() {
    getDetail(this.props.categoryid, this.props.id).then(res => {
      const detail = res.data;
      console.log("favorite =>", detail.favorite);
      this.setState({
        id: detail.id,
        title: detail.title,
        description: detail.description,
        favorite: detail.favorite,
        content: detail.content
      });
    });
  }
  render() {
    return (
      <div>
        <h4>Componente Detalle</h4>
        <div className="title">
          <p>{this.state.title}</p>
          <span>
            {" "}
            {this.state.favorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon style={{ color: "red" }} />
            )}
          </span>
        </div>
        <p>{this.state.description}</p>
        <p>{this.state.content}</p>
      </div>
    );
  }
}
