import {
    addCoach,
    addCoachDetails,
    addCoaching,
    addCoachingDetails,
    addCoachingParentDetails,
    addFAQPoint,
    addFeedback,
    addFood, addFoodDetail,
    addFoodPoint, addFoodPointParentDay, addPhotosToCoach,
    addPhotosToCoaching, addPhotosToFood,
    addVideoToCoaching,
    deleteCoach,
    deleteCoachDetails,
    deleteCoaching,
    deleteCoachingDetails, deleteCoachingParentDetails, deleteCoachingVideo,
    deleteFAQ,
    deleteFeedback,
    deleteFood, deleteFoodDetails,
    deleteFoodPoint,
    getUsers,
    updateCoach,
    updateFAQPoint,
    updateFeedback,
    updateFood,
    updateFoodPoint,
} from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { setCoaches, setCoaching, setFAQ, setFeedbacks, setFood, setUsers } from './admin-actions';
import { getCoaches, getCoaching, getFaq, getFeedbacks, getFood } from '../../api/content-api';
import { setAlert } from '../alert-context/alert-actions';
import { writeError } from '../alert-context/alert-context-helper';
import { removeSpinner, setSpinner } from '../spinner-context/spinner-actions';

export function addNewCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData) {
    addCoach(data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachDetails(id).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function updateCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData, coachId: string) {
    updateCoach(data, coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoach(coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachingHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoaching(coachId).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingDetails(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachingParentDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingParentDetails(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}


export function getCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            dispatch(setCoaches(res.data));
        })
        .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewCoachDetailsHelper(dispatch: Dispatch<AnyAction>, id, data) {
    addCoachDetails(id, data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function getFeedbacksHelper(dispatch: Dispatch<AnyAction>){
    getFeedbacks()
        .then(res => {
            dispatch(setFeedbacks(res.data));
        })
        .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewFeedbacksHelper(dispatch: Dispatch<AnyAction>, data) {
    addFeedback(data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function updateFeedbacksHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFeedback(id, data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteFeedbackHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFeedback(id).then(res => {
        getFeedbacks()
            .then(res => {
                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewCoachingHelper(dispatch: Dispatch<AnyAction>, data: FormData, video) {
    addCoaching(data).then(res => {
        dispatch(setSpinner())
        addVideoToCoachingHelper(dispatch, res.data.id, video);
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, dataParent, data) {

    addCoachingParentDetails(dataParent).then(res => {
        data.id = res.data;
        addCoachingDetails(data).then(res => {
            getCoaching()
                .then(res => {
                    dispatch(setCoaching(res.data));
                })
                .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });

}

export function addPhotosToCoachingHelper(dispatch: Dispatch<AnyAction>, data) {
    dispatch(setSpinner());
    Promise.all(
        data.map(x=>
            addPhotosToCoaching(x)
        )
    ) .then((response) => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
                dispatch(removeSpinner());
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });
}

export function addPhotosToFoodHelper(dispatch: Dispatch<AnyAction>, data) {
    dispatch(setSpinner());
    Promise.all(
        data.map(x=>
            addPhotosToFood(x)
        )
    ).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
                dispatch(removeSpinner());
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addPhotosToCoachHelper(dispatch: Dispatch<AnyAction>, data) {
    dispatch(setSpinner());

    Promise.all(
        data.map(x=>
            addPhotosToCoach(x)
        )
    ) .then((response) => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
                dispatch(removeSpinner());
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });
}


export function addVideoToCoachingArrayHelper(dispatch: Dispatch<AnyAction>, id, data) {

    Promise.all(
        data.map(x=>
            addVideoToCoaching(id, x)
        )
    ) .then((response) => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
                dispatch(removeSpinner())

            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });

    // addVideoToCoaching(id, data).then(res => {
    //     getCoaching()
    //         .then(res => {
    //             dispatch(setCoaching(res.data));
    //
    //             if(func) {
    //                 func(false);
    //             }
    //
    //         })
    //         .catch(err => {
    //             writeError(dispatch, err?.response?.data?.error ?? err?.message)
    //         });
    //     return res.status === 200;
    // }).catch(err => {
    //     writeError(dispatch, err?.response?.data?.error ?? err?.message)
    // });
}

export function addVideoToCoachingHelper(dispatch: Dispatch<AnyAction>, id, data) {
    addVideoToCoaching(id, data).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
                dispatch(removeSpinner());

            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteCoachingVideoHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingVideo(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });
}


export function getCoachingHelper(dispatch: Dispatch<AnyAction>){
    getCoaching()
        .then(res => {
            dispatch(setCoaching(res.data));
        })
        .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function getFoodHelper(dispatch: Dispatch<AnyAction>){
    getFood()
        .then(res => {
            dispatch(setFood(res.data));
        })
        .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewFoodHelper(dispatch: Dispatch<AnyAction>, data) {
    dispatch(setSpinner());
    addFood(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
                dispatch(removeSpinner());
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewFoodDetailsHelper(dispatch: Dispatch<AnyAction>, id,  data) {
    addFoodDetail(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}


export function updateFoodHelper(dispatch: Dispatch<AnyAction>, id, data) {
    dispatch(setSpinner());
    updateFood(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data))
                dispatch(removeSpinner());
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewFoodPointHelper(dispatch: Dispatch<AnyAction>, data) {
    addFoodPoint(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
            });
        return res.status === 200;
    });
}

export function deleteFoodHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFood(id).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteFoodPointHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFoodPoint(id).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteFoodDetailHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFoodDetails(id).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
        writeError(dispatch, err?.response?.data?.error ?? err?.message)
    });
}

export function updateFoodPointHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFoodPoint(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function getUsersHelper(dispatch: Dispatch<AnyAction>) {
    getUsers().then(res => {
        dispatch(setUsers(res.data));
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function getFAQHelper(dispatch: Dispatch<AnyAction>) {
    getFaq().then(res => {
        dispatch(setFAQ(res.data));
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function addNewFAQHelper(dispatch: Dispatch<AnyAction>, data) {
    addFAQPoint(data).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
        .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function updateFAQHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFAQPoint(id, data).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}

export function deleteFAQHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFAQ(id).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
            .catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
        return res.status === 200;
    }).catch(err => {
                writeError(dispatch, err?.response?.data?.error ?? err?.message)
            });
}
