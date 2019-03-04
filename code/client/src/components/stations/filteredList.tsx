import * as React from 'react';
import { StationSummary } from '../../../../common/models/stations/stationSummary';
import { Search } from '../search';
import { SearchValues } from '../../../../common/models/search';
import { Summary } from './summary';

export interface FilteredListProps {
    stations: StationSummary[];
    onSelect: (station: StationSummary) => void;
    onSearch: (values: SearchValues) => void;
}
export interface FilteredListState {

}

export class FilteredList extends React.Component<FilteredListProps, FilteredListState> {
    constructor(props: FilteredListProps) {
        super(props);

        this.state = {};
    }

    getItems() {
        return this.props.stations.map(s => <Summary key={s.id} station={s} onSelect={this.props.onSelect} />);
    }

    render() {
        if (this.props.stations == null) {
            return (
                <div>Loading stations...</div>
            );
        } else if (this.props.stations.length == 0) {
            return (
                <div>No results...</div>
            )
        }
console.log("filtered list render");
        const result = (
            <div>
                <div className="row">
                    {this.getItems()}
                </div>
            </div>
        );
console.log("filtered list done rendering");
        return result;
    }
}