import {
    BooleanProperty,
    ImageTd,
    List,
    Text,
    TitleSubtitle,
    ValueWithTitle,
} from 'List'
import TagForm from './Form'
import { EntitySeo } from 'Seo'

const filters = <>
    <Text
        property='Name'
        placeholder='Name'
    />
</>

const sorts = [
    {
        caption: 'Name A-Z',
        property: 'Name',
        direction: 'asc'
    },
    {
        caption: 'Name Z-A',
        property: 'Name',
        direction: 'desc'
    }
]

const headers = <>
    <th></th>
    <th start>Name</th>
    <th>Is active?</th>
</>

const row = (entity) => <>
    <ImageTd
        url={entity.relatedItems.imageUrl}
        uploadUrl={`/tag/setImage?tagId=${entity.id}`}
    />
    <td>
        <TitleSubtitle
            title={
                <ValueWithTitle
                    value={entity.name}
                    title={entity.description}
                />}
            subtitle={entity.slug}
        />
    </td>
    <td>
        <BooleanProperty
            value={entity.isActive}
            actionUrl={`/tag/toggleBoolean?id=${entity.id}&property=IsActive`}
        />
    </td>
</>

const entityActions = (entity) => <>
    <EntitySeo
        entityType='Tag'
        entityGuid={entity.guid}
    />
</>

const Tags = (props) => {
    return <List
        title='Tags'
        entityType='Tag'
        filters={filters}
        sorts={sorts}
        headers={headers}
        row={row}
        entityActions={entityActions}
        upsert={TagForm}
        hasEdit
        hasDelete
        {...props}
    // separateRowForActions
    />
}

export default Tags
