import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td> <div class="avatar offline">
                <div class="w-16 rounded-full">
                    <img src={img} alt={name} />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="my-modal-6" class="btn btn-xs btn-error">delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;