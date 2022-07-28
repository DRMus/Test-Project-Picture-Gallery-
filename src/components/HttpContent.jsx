import React, { Component } from "react";
import axios from "axios";
import PictureGallery from "./PictureGallery";
import "../styles/PictureGal.scss";

class HttpContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoadedPic: false,
      isLoadedLoc: false,
      isLoadedAut: false,
      count: 0,
      items: [],
      itemsLocations: [],
      itemsAuthors: [],
    };

    this.data = [];

    this.getAuthor = (id) => {
      return this.state.itemsAuthors.find((author) => author.id === id).name;
    };

    this.getLocation = (id) => {
      return this.state.itemsLocations.find((loc) => loc.id === id).location;
    };
  }

  async getOptionsFirst() {
    await axios
      .get("https://test-front.framework.team/locations")
      .then((result) => {
        this.setState({ isLoadedLoc: true, itemsLocations: result.data });
      });

    await axios
      .get("https://test-front.framework.team/authors")
      .then((result) => {
        this.setState({ isLoadedAut: true, itemsAuthors: result.data });
      });

    this.getOptions();
  }

  async getOptions() {
    this.setState({
      isLoadedPic: false,
    });

    await axios
      .get("https://test-front.framework.team/paintings", {
        params: {
          _page: this.props.newPage,
          _limit: 12,
          authorId: this.props.authorIdSet,
          locationId: this.props.locationIdSet,
          q: this.props.searchNameSet,
          created_gte: this.props.rangeFrom,
          created_lte: this.props.rangeBefore,
        },
      })
      .then((res) => {
        this.setState({ isLoadedPic: true, error: null });
        this.maperRequest(res.data);
      })
      .catch((error) => {
        this.setState({ isLoadedPic: true, error: error });
      });
  }

  maperRequest(data) {
    const options = data.map((el) => (
      <PictureGallery
        key={el.id.toString()}
        props={el}
        authorName={this.getAuthor(el.authorId)}
        location={this.getLocation(el.locationId)}
      />
    ));

    this.setState({ items: options });
  }

  componentDidMount() {
    this.getOptionsFirst();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.authorIdSet !== prevProps.authorIdSet ||
      this.props.locationIdSet !== prevProps.locationIdSet ||
      this.props.searchNameSet !== prevProps.searchNameSet ||
      this.props.newPage !== prevProps.newPage ||
      this.props.rangeFrom !== prevProps.rangeFrom ||
      this.props.rangeBefore !== prevProps.rangeBefore
    ) {
      this.getOptions();
    }
  }

  render() {
    if (this.state.error) {
      return <p>Error {this.state.error}</p>;
    } else if (
      !this.state.isLoadedPic ||
      !this.state.isLoadedLoc ||
      !this.state.isLoadedAut
    ) {
      return (
        <div className="pictures">
          <div
            className={
              this.props.darkVersion ? "loader loader__dark" : "loader"
            }
          ></div>
        </div>
      );
    } else {
      return <div className="pictures">{this.state.items}</div>;
    }
  }
}

export default React.memo(HttpContent);
