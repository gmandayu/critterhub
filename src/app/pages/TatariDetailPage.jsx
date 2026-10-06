import { useParams } from 'react-router-dom';
import { PagePlaceholder } from './PagePlaceholder';

export function TatariDetailPage() {
    const { tatariId } = useParams();

    return <PagePlaceholder title="Tatari details" detail={`Tatari ID: ${tatariId}`} />;
}
