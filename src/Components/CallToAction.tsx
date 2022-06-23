import React, { Component, useState, useEffect } from "react";
import { ClanService, Clan } from "../services/ClanService";

interface CallToActionProps {
  clans: Array<Clan>;
  isLoading: boolean;
  onClick: (value: Array<Clan>) => void;
}

const CallToAction = (props: CallToActionProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [clansState, setClansState] = useState<Array<Clan>>([]);

  const handleSearch = async (searchValue: string) => {
    const clanService = new ClanService();
    return await clanService
      .searchClan(searchValue)
      .then((clans: Array<Clan>) => {
        setClansState(clans);
        return clans;
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    props.onClick(clansState);
  }, [clansState]);

  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Please Search by Name</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Clan Name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <label>Search Clan Name</label>
          </div>
          {props.isLoading && (
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <p>
            <a
              href="#"
              className="btn btn-primary my-2"
              onClick={() => handleSearch(searchValue)}
            >
              Search
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
