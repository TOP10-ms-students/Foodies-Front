import React from "react";
import { Link } from "react-router-dom";

import { PageContainer } from "../PageContainer";
import { ROUTE_PATHS } from "../../../routing/constants";
import { FacebookIconSvg } from "../../components/icons/FacebookIconSvg";
import { InstagramIcon, YoutubeIcon } from "../../components/icons/icons";
import {
  NetworkLinks,
  StyledLayoutFooter,
  Line,
  Copyright,
} from "./LayoutFooter.styled";

export const LayoutFooter = () => (
  <PageContainer>
    <StyledLayoutFooter>
      <div>
        <Link to={ROUTE_PATHS.HOME}>foodies</Link>

        <NetworkLinks>
          <li>
            <a href="https://www.facebook.com/goITclub/">
              <FacebookIconSvg />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/goitclub/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/c/GoIT">
              <YoutubeIcon />
            </a>
          </li>
        </NetworkLinks>
      </div>

      <Line></Line>

      <Copyright>@2024, Foodies. All rights reserved</Copyright>
    </StyledLayoutFooter>
  </PageContainer>
);
