import React, { Component } from "react";
import { Clan } from "../services/ClanService";

interface AlbumProps {
  clans: Array<Clan>;
  isLoading: boolean;
}

const Album = (props: AlbumProps) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {props.isLoading && (
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.clans?.map((clan: Clan) => {
            return (
              <div className="col" key={clan.tag}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <img
                      className="bd-placeholder-img img-thumbnail bd-example"
                      src={clan.badgeUrls.small}
                      alt="ICON"
                    />
                    <h5 className="card-title">{clan.name}</h5>
                    <p className="card-text">
                      <span>Clan LEVEL: {clan.clanLevel} </span>
                      <br />
                      <span> Location: {clan.location?.name}</span>
                      <br />
                      <span>War League: {clan.warLeague.name}</span> <br />
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          {clan.type}
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Clan Points: {clan.clanPoints}
                        </button>
                      </div>
                      <small className="text-muted">
                        Clan Members: {clan.members}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          }, props)}
        </div>
      </div>
    </div>
  );
};
export default Album;
