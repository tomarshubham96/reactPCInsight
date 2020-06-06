import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function createData(profileName, p, a, f) {
  return { profileName, p, a, f };
}

const rows = [
  createData('Test Profile 0', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 1', '#F7DC6F', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 2', '#F7DC6F', '#E74C3C', '#2ECC71'),
  createData('Test Profile 3', '#E74C3C', '#2ECC71', '#F7DC6F'),
  createData('Test Profile 4', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 5', '#F7DC6F', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 6', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 7', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 8', '#2ECC71', '#F7DC6F', '#E74C3C'),
  createData('Test Profile 9', '#2ECC71', '#E74C3C', '#D5D8DC'),
  createData('Test Profile 10', '#D5D8DC', '#F7DC6F', '#E74C3C'),
  createData('Test Profile 11', '#F7DC6F', '#E74C3C', '#2ECC71'),
  createData('Test Profile 12', '#E74C3C', '#2ECC71', '#F7DC6F'),
  createData('Test Profile 13', '#F7DC6F', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 14', '#E74C3C', '#2ECC71', '#D5D8DC'),
  createData('Test Profile 15', '#2ECC71', '#D5D8DC', '#E74C3C'),
  createData('Test Profile 16', '#D5D8DC', '#F7DC6F', '#2ECC71'),
  createData('Test Profile 17', '#F7DC6F', '#2ECC71', '#E74C3C'),
  createData('Test Profile 18', '#2ECC71', '#F7DC6F', '#D5D8DC'),
  createData('Test Profile 19', '#2ECC71', '#E74C3C', '#D5D8DC'),
  createData('Test Profile 20', '#E74C3C', '#2ECC71', '#F7DC6F')
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'profileName', numeric: false, disablePadding: true, label: 'Profile' },
  { id: 'p', numeric: false, disablePadding: true, label: 'P' },
  { id: 'a', numeric: false, disablePadding: true, label: 'A' },
  { id: 'f', numeric: false, disablePadding: true, label: 'F' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
            color="primary"
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              className={classes.tableSortLabel}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={KeyboardArrowDownIcon}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => { 
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Profiles
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    // minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableSortLabel: {
    paddingLeft: '7px'
  },
  tableCell: {
    paddingRight: '27px'
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.profileName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  /* const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }; */

  /* const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; */

  /* const handleChangeDense = event => {
    setDense(event.target.checked);
  }; */

  const isSelected = name => selected.indexOf(name) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
        <EnhancedTableToolbar numSelected={selected.length} />
        {/* <TableContainer> */}
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.profileName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.profileName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.profileName}
                      selected={isItemSelected}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          color="primary"
                        />
                      </TableCell>
                      {/*
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      */}
                      <TableCell className={classes.tableCell} align='left' component="th" id={labelId} scope="row" padding='none'>{row.profileName}</TableCell>
                      <TableCell align='left' padding='none'><FiberManualRecordIcon htmlColor={row.p} /></TableCell>
                      <TableCell align='left' padding='none'><FiberManualRecordIcon htmlColor={row.a} /></TableCell>
                      <TableCell align='left' padding='none'><FiberManualRecordIcon htmlColor={row.f} /></TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        {/* </TableContainer> */}
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      {/* </Paper> */}
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}
