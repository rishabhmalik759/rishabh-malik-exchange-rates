interface LastUpdatedPlaceholderProps {
    lastFetchTimestamp?: string;
}

export const LastUpdatedPlaceholder = ({ lastFetchTimestamp }: LastUpdatedPlaceholderProps) => {
    return (
        <div>
            {lastFetchTimestamp && (
                <div className="text-muted mb-3">
                    Last updated: {new Date(lastFetchTimestamp).toLocaleString()}
                </div>
            )}
        </div>
    );
};
