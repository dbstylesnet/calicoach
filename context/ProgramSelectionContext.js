import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Platform } from "react-native";

import { getProgramById } from "../data/programs";

const STORAGE_KEY = "calicoach.selectedProgram";

const ProgramSelectionContext = createContext({
  selectedProgramId: null,
  selectedProgram: null,
  ready: false,
  showProgramSelectionNotice: false,
  selectProgram: () => {},
  requestProgramSelection: () => {},
  dismissProgramSelectionNotice: () => {},
});

const readStorage = () => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const program = getProgramById(raw);
      return program ? raw : null;
    }
  } catch {
    // ignore storage errors
  }
  return null;
};

const writeStorage = (programId) => {
  try {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      if (programId) {
        localStorage.setItem(STORAGE_KEY, programId);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch {
    // ignore storage errors
  }
};

export const ProgramSelectionProvider = ({ children }) => {
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [showProgramSelectionNotice, setShowProgramSelectionNotice] =
    useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSelectedProgramId(readStorage());
    setReady(true);
  }, []);

  const selectProgram = useCallback((programId) => {
    setSelectedProgramId(programId);
    writeStorage(programId);
    setShowProgramSelectionNotice(false);
  }, []);

  const requestProgramSelection = useCallback(() => {
    setShowProgramSelectionNotice(true);
  }, []);

  const dismissProgramSelectionNotice = useCallback(() => {
    setShowProgramSelectionNotice(false);
  }, []);

  const selectedProgram = useMemo(
    () => (selectedProgramId ? getProgramById(selectedProgramId) : null),
    [selectedProgramId]
  );

  const value = useMemo(
    () => ({
      selectedProgramId,
      selectedProgram,
      ready,
      showProgramSelectionNotice,
      selectProgram,
      requestProgramSelection,
      dismissProgramSelectionNotice,
    }),
    [
      selectedProgramId,
      selectedProgram,
      ready,
      showProgramSelectionNotice,
      selectProgram,
      requestProgramSelection,
      dismissProgramSelectionNotice,
    ]
  );

  return (
    <ProgramSelectionContext.Provider value={value}>
      {children}
    </ProgramSelectionContext.Provider>
  );
};

export const useProgramSelection = () => useContext(ProgramSelectionContext);
