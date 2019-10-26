import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";
import CollectionPage from "./../collection/collection.component";

const ShopPage = props => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
