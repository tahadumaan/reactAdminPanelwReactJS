import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function featuredInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,342$</span>
          <span className="featuredMoneyRate">
            -11 .4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared the last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,142$</span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared the last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">7,342$</span>
          <span className="featuredMoneyRate">
            +2.3
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared the last month</span>
      </div>
    </div>
  );
}
