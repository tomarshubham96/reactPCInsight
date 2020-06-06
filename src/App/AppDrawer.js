import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import Divider from '@material-ui/core/Divider';

import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BarChartIcon from '@material-ui/icons/BarChart';

import { connect } from 'react-redux';
import { appDrawerToggle } from '../redux/actionCreators';

const SidebarTreeItem = withStyles({
  content: {
    padding: 15,
    width: 300
  }
})(TreeItem);

function AppDrawer(props) {
  return (
    <Drawer open={props.appDrawer} onClose={props.appDrawerToggle}>




      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>

        <SidebarTreeItem nodeId='0.2' label='Search' icon={<SearchIcon />} />
        <Divider />
        <SidebarTreeItem nodeId='1' label='Controls Dashboard' icon={<DashboardIcon />}>
          <SidebarTreeItem nodeId='1.1' label='KPI/KRI'>
            <Link to='/'><SidebarTreeItem nodeId='1.1.1' label='Business Exceptions' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.1.2' label='PC Exceptions' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.1.3' label='MTD Heat Map Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.1.4' label='Key Controls Dashboard' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.1.5' label='Control Assessment Summary' /></Link>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='1.2' label='P&L/PAA'>
            <Link to='/'><SidebarTreeItem nodeId='1.2.1' label='P&L Adjustments' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.2.2' label='PAA Adjustments' /></Link>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='1.3' label='Valuation Control'>
            <Link to='/'><SidebarTreeItem nodeId='1.3.1' label='Exception Reports Summary' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.3.2' label='GXS Curve Feed Load Status Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.3.4' label='Securities IPV Dashboard' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='1.3.5' label='Reuters Completeness' /></Link>
          </SidebarTreeItem>
        </SidebarTreeItem>
        <Divider />
        <SidebarTreeItem nodeId='2' label='Process Workflows' icon={<AssignmentIcon />}>
          <SidebarTreeItem nodeId='2.1' label='P&L/PAA'>
            <Link to='/'><SidebarTreeItem nodeId='2.1.1' label='Feed Dashboard' /></Link>
            <Link to='/process-workflows/plpaa/workflows'><SidebarTreeItem nodeId='2.1.2' label='Workflow Status' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.3' label='New Trade Activity Review' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.4' label='Residual Review' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.5' label='FTB Reconciliation' /></Link>
            <Link to='/process-workflows/plpaa/plpaa-review'><SidebarTreeItem nodeId='2.1.6' label='P&L/PAA Review' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.7' label='Produce Affirmation' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.8' label='Approve Affirmation' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.1.9' label='Escalation Inbox' /></Link>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='2.2' label='Valuation Control'>
            <Link to='/'><SidebarTreeItem nodeId='2.2.1' label='Independent Market Data' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.2.2' label='Derivatives IPV Full Reval' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.2.3' label='Valuation Adjustment' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.2.4' label='MSH Full Revaluation' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='2.2.5' label='MDH Feed Dashboard' /></Link>
          </SidebarTreeItem>
        </SidebarTreeItem>
        <Divider />
        <SidebarTreeItem nodeId='3' label='Reports/Analytics' icon={<EqualizerIcon />}>
          <SidebarTreeItem nodeId='3.1' label='P&L/PAA Reports'>
            <SidebarTreeItem nodeId='3.1.1' label='Business Reports'>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.1' label='G10 Rates (NAM)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.2' label='G10 Rates (EMEA)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.3' label='G10 Rates (ASIA)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.4' label='Credit (NAM)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.5' label='Credit (EMEA)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.6' label='Credit (ASIA)' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.7' label='FXLM' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.8' label='Commodities' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.9' label='Global Equities' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.10' label='GSM' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.11' label='Municipals' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.12' label='Securities Services' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.13' label='CMO' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.1.14' label='Others' /></Link>
            </SidebarTreeItem>
            <SidebarTreeItem nodeId='3.1.2' label='Sandbox'>
              <Link to='/'><SidebarTreeItem nodeId='3.1.2.1' label='Residual Analysis' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.2.2' label='Residual Threshold - Position Level' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.2.3' label='New Trade Analysis' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.1.2.4' label='MTD Unexplained P&L Exception Report' /></Link>
            </SidebarTreeItem>
            <Link to='/'><SidebarTreeItem nodeId='3.1.3' label='My Workspace' /></Link>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='3.2' label='IPV Reports'>
            <Link to='/'><SidebarTreeItem nodeId='3.2.1' label='Reuters Market Data' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='3.2.2' label='Reuters Notes File' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='3.2.3' label='Totem Price Trend' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='3.2.4' label='Reuters Price Trend' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='3.2.5' label='Standardized Market Data Report' /></Link>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='3.3' label='Valuation Control'>
            <SidebarTreeItem nodeId='3.3.1' label='Securities IPV Reports'>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.1' label='IPV Results' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.2' label='Security Indicative' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.3' label='PMC Prices' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.4' label='BVAL Prices' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.5' label='Price History' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.6' label='MSRB Muni' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.7' label='Trade History' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.8' label='Override Report' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.9' label='VQR Report' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.10' label='What If' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.11' label='Val Tech Audit' /></Link>
              <Link to='/'><SidebarTreeItem nodeId='3.3.1.12' label='Pref Hier Ref Data' /></Link>
            </SidebarTreeItem>
          </SidebarTreeItem>
          <SidebarTreeItem nodeId='3.4' label='Global Reports'>
            <Link to='/'><SidebarTreeItem nodeId='3.4.1' label='Centralized FTB' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='3.4.2' label='Trader Pack Report' /></Link>
          </SidebarTreeItem>
        </SidebarTreeItem>
        <Divider />
        <SidebarTreeItem nodeId='4' label='Configuration' icon={<SettingsIcon />}>
          <SidebarTreeItem nodeId='4.1' label='Valuation Control'>
            <SidebarTreeItem nodeId='4.1.1' label='Securities IPV'>
              <SidebarTreeItem nodeId='4.1.1.1' label='Mappings'>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.1' label='Pricing Grid Mapping - Securities' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.2' label='Credit Rating - Rank Map' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.3' label='Designate Product Champion' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.4' label='PMC Code - Desc' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.5' label='Securities IPV Job Schedule' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.6' label='Securities IPV Scope Exclusion' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.7' label='Global Configuration Map' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.1.8' label='Collateral IPV Config' /></Link>
              </SidebarTreeItem>
              <SidebarTreeItem nodeId='4.1.1.2' label='Overrides'>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.1' label='Override Security Mapping' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.2' label='Vendor Config' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.3' label='Vendor Requote' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.4' label='Input Reference Price' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.5' label='Confirm Auto Adjustments' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.6' label='Redo Assessment by MS-Cusip' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.7' label='Vendor Quality Report Request' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.8' label='What If Upload' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.9' label='Manual Upload' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.10' label='Request BVAL Price' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.11' label='Request NONBVAL Price' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.12' label='Request Reuters Price' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.13' label='Request SSFT Price' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.2.14' label='Off BS Collateral Data' /></Link>
              </SidebarTreeItem>
              <SidebarTreeItem nodeId='4.1.1.3' label='Reports'>
                <Link to='/'><SidebarTreeItem nodeId='4.1.1.3.1' label='Activity Report' /></Link>
              </SidebarTreeItem>
            </SidebarTreeItem>
            <SidebarTreeItem nodeId='4.1.2' label='Reference Data'>
              <SidebarTreeItem nodeId='4.1.2.1' label='Derivatives IPV'>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.1' label='Regional Close' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.2' label='Cut Time MDH' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.3' label='Product Benchmark' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.4' label='Pricing Grid' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.5' label='Totem Product Taxonomy' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.6' label='Totem Tenor Mapping' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.7' label='Reuters Product Mapping' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.8' label='Benchmark Instrument Attributes' /></Link>
                <Link to='/'><SidebarTreeItem nodeId='4.1.2.1.9' label='Consensus Template Pricing' /></Link>
              </SidebarTreeItem>
            </SidebarTreeItem>
          </SidebarTreeItem>
        </SidebarTreeItem>
        <Divider />
        <SidebarTreeItem nodeId='5' label='Support' icon={<HelpIcon />}>
          <Link to='/'><SidebarTreeItem nodeId='5.1' label='Release Notes' /></Link>
          <SidebarTreeItem nodeId='5.2' label='P&L/PAA Validations'>
            <Link to='/'><SidebarTreeItem nodeId='5.2.1' label='Validation Summary Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.2' label='S2 Finalized vs VA Feed Recon Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.3' label='S2 Finalized vs RACE Recon Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.4' label='S2 Finalized vs 2 Percent Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.5' label='VA Dummy Account Report' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.6' label='S2 Finalized DLY vs MTD' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.7' label='S2 Data Load Stats' /></Link>
            <Link to='/'><SidebarTreeItem nodeId='5.2.8' label='Flash Validation Report' /></Link>
          </SidebarTreeItem>
        </SidebarTreeItem>
        <Divider />
      </TreeView>






    </Drawer>
  );
}

function mapStateToProps(state) {
  return {
    appDrawer: state.appDrawer
  };
}

export default connect(
  mapStateToProps,
  { appDrawerToggle }
)(AppDrawer);
