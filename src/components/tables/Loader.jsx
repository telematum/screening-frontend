import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * This component will display the skeleton as laoding status while fetching data
 * @returns - A JSX element to display skeleton.
 */
export default function Loader() {
    return (
        <>
            <tbody>
                <tr className="border-b">

                    {/* profile */}
                    <td className="p-2" style={{ minWidth: '166px' }}>
                        <div className='flex items-center space-x-2'>
                            <Skeleton height={50} width={50} style={{ borderRadius: '50%'}} />
                            <span>
                                <Skeleton width={80} />
                                <Skeleton width={100} />
                            </span>
                        </div>

                    </td>

                    {/* date */}
                    <td>
                        <Skeleton height={20} width={90} />
                    </td>

                    {/* time */}
                    <td>
                        <Skeleton height={20} width={60} />
                    </td>

                    {/* doctor */}
                    <td>
                        <Skeleton height={20} width={100} />
                    </td>

                    {/* injury */}
                    <td>
                        <Skeleton height={20} width={80} />
                    </td>

                    {/* action */}
                    <td className="pl-7">
                        <Skeleton height={30} width={5} />
                    </td>
                </tr>
            </tbody>
        </>
    )
}
