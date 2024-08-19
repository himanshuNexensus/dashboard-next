import React from 'react';

interface ExpandedRowDetailsProps<TData> {
  data: TData;
}

export function ExpandedRowDetails<TData>({ data }: ExpandedRowDetailsProps<TData>) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {(data as any).comments?.map((comment: any) => (
        <div key={comment.id} className="mb-2">
          <p className="font-medium">{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
