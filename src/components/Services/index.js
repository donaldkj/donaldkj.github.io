import React from 'react';
import Icon1 from '../../images/svg-9.svg'
import Icon2 from "../../images/svg-8.svg";
import Icon3 from "../../images/svg-12.svg";

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from "./ServicesElements"

const Services = () => {
    return (
      <ServicesContainer id="yourbenefits">
        <ServicesH1>Your Benefits</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>No Cosigner Needed</ServicesH2>
            <ServicesP>
              Our personal loan is based solely on your merit. No cosigner is required.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Zero Prepayment Fees</ServicesH2>
            <ServicesP>
              Our customers save interest by making advanced payments.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Lowest Interest Rates</ServicesH2>
            <ServicesP>
              We are known for having the lowest interest rates based on your income.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    );
}

export default Services
