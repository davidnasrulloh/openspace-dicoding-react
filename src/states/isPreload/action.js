/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */

import api from "../../utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setAuthUserActionCreator } from "../authUser/action";

const ActionType = {
	SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function setIsPreloadActionCreator(isPreload) {
	return {
		type: ActionType.SET_IS_PRELOAD,
		payload: {
			isPreload,
		},
	};
}

function asyncPreloadProcess() {
	return async (dispatch) => {
		dispatch(showLoading());

		try {
			// preload process
			const authUser = await getOwnProfile();
			dispatch(setAuthUserActionCreator(authUser));
		} catch (error) {
			// fallback process
			dispatch(setAuthUserActionCreator(null));
		} finally {
			// end preload process
			dispatch(setIsPreloadActionCreator(false));
		}

		dispatch(hideLoading());
	};
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
