import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';
import { Header } from 'semantic-ui-react'

export default observer(function ActivityList() {

    // MobX
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <Fragment>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </Fragment>
    )
})