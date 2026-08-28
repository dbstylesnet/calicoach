export default {
  program: {
      "id": "convict_conditioning",
      "name": "Convict Conditioning",
      "author": "Paul Wade",
      "version": "canonical_big_six",
      "description": "Progressive bodyweight strength training organized into six movement chains, each containing ten progressively harder steps.",
      "source_note": "Exercise names and progression standards are based on published Convict Conditioning progression charts. Verify against the user's licensed copy of the book before using as authoritative training prescription.",
      "chains": [
        {
          "id": "pushups",
          "name": "Push-ups",
          "display_name": "Push-up Chain",
          "category": "upper_body_push",
          "primary_muscles": [
            "chest",
            "triceps",
            "anterior_deltoids"
          ],
          "secondary_muscles": [
            "core",
            "serratus_anterior"
          ],
          "equipment": [],
          "steps": [
            {
              "id": "pushups_01",
              "step": 1,
              "name": "Wall Push-ups",
              "slug": "wall_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 25 },
                "progression": { "sets": 3, "reps": 50 }
              }
            },
            {
              "id": "pushups_02",
              "step": 2,
              "name": "Incline Push-ups",
              "slug": "incline_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 40 }
              }
            },
            {
              "id": "pushups_03",
              "step": 3,
              "name": "Kneeling Push-ups",
              "slug": "kneeling_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 3, "reps": 30 }
              }
            },
            {
              "id": "pushups_04",
              "step": 4,
              "name": "Half Push-ups",
              "slug": "half_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 12 },
                "progression": { "sets": 2, "reps": 25 }
              }
            },
            {
              "id": "pushups_05",
              "step": 5,
              "name": "Full Push-ups",
              "slug": "full_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "pushups_06",
              "step": 6,
              "name": "Close Push-ups",
              "slug": "close_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "pushups_07",
              "step": 7,
              "name": "Uneven Push-ups",
              "slug": "uneven_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "pushups_08",
              "step": 8,
              "name": "Half One-Arm Push-ups",
              "slug": "half_one_arm_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "pushups_09",
              "step": 9,
              "name": "Lever Push-ups",
              "slug": "lever_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "pushups_10",
              "step": 10,
              "name": "One-Arm Push-ups",
              "slug": "one_arm_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "master_step": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 1, "reps": 100 }
              }
            }
          ]
        },
  
        {
          "id": "squats",
          "name": "Squats",
          "display_name": "Squat Chain",
          "category": "lower_body",
          "primary_muscles": [
            "quadriceps",
            "glutes",
            "hamstrings"
          ],
          "secondary_muscles": [
            "calves",
            "core"
          ],
          "equipment": [],
          "steps": [
            {
              "id": "squats_01",
              "step": 1,
              "name": "Shoulderstand Squats",
              "slug": "shoulderstand_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 25 },
                "progression": { "sets": 3, "reps": 50 }
              }
            },
            {
              "id": "squats_02",
              "step": 2,
              "name": "Jackknife Squats",
              "slug": "jackknife_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 40 }
              }
            },
            {
              "id": "squats_03",
              "step": 3,
              "name": "Supported Squats",
              "slug": "supported_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 3, "reps": 30 }
              }
            },
            {
              "id": "squats_04",
              "step": 4,
              "name": "Half Squats",
              "slug": "half_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 35 },
                "progression": { "sets": 2, "reps": 50 }
              }
            },
            {
              "id": "squats_05",
              "step": 5,
              "name": "Full Squats",
              "slug": "full_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 30 }
              }
            },
            {
              "id": "squats_06",
              "step": 6,
              "name": "Close Squats",
              "slug": "close_squats",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "squats_07",
              "step": 7,
              "name": "Uneven Squats",
              "slug": "uneven_squats",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "squats_08",
              "step": 8,
              "name": "Half One-Leg Squats",
              "slug": "half_one_leg_squats",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "squats_09",
              "step": 9,
              "name": "Assisted One-Leg Squats",
              "slug": "assisted_one_leg_squats",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "squats_10",
              "step": 10,
              "name": "One-Leg Squats",
              "slug": "one_leg_squats",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "master_step": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 50 }
              }
            }
          ]
        },
  
        {
          "id": "pullups",
          "name": "Pull-ups",
          "display_name": "Pull-up Chain",
          "category": "upper_body_pull",
          "primary_muscles": [
            "latissimus_dorsi",
            "biceps",
            "forearms"
          ],
          "secondary_muscles": [
            "rhomboids",
            "trapezius",
            "rear_deltoids",
            "core"
          ],
          "equipment": [
            "pull_up_bar"
          ],
          "steps": [
            {
              "id": "pullups_01",
              "step": 1,
              "name": "Vertical Pulls",
              "slug": "vertical_pulls",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 40 }
              }
            },
            {
              "id": "pullups_02",
              "step": 2,
              "name": "Horizontal Pulls",
              "slug": "horizontal_pulls",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 30 }
              }
            },
            {
              "id": "pullups_03",
              "step": 3,
              "name": "Jackknife Pulls",
              "slug": "jackknife_pulls",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 3, "reps": 20 }
              }
            },
            {
              "id": "pullups_04",
              "step": 4,
              "name": "Half Pull-ups",
              "slug": "half_pullups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 11 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "pullups_05",
              "step": 5,
              "name": "Full Pull-ups",
              "slug": "full_pullups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 8 },
                "progression": { "sets": 2, "reps": 10 }
              }
            },
            {
              "id": "pullups_06",
              "step": 6,
              "name": "Close Pull-ups",
              "slug": "close_pullups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 8 },
                "progression": { "sets": 2, "reps": 10 }
              }
            },
            {
              "id": "pullups_07",
              "step": 7,
              "name": "Uneven Pull-ups",
              "slug": "uneven_pullups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 7 },
                "progression": { "sets": 2, "reps": 9 }
              }
            },
            {
              "id": "pullups_08",
              "step": 8,
              "name": "Half One-Arm Pull-ups",
              "slug": "half_one_arm_pullups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 4 },
                "intermediate": { "sets": 2, "reps": 6 },
                "progression": { "sets": 2, "reps": 8 }
              }
            },
            {
              "id": "pullups_09",
              "step": 9,
              "name": "Assisted One-Arm Pull-ups",
              "slug": "assisted_one_arm_pullups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 3 },
                "intermediate": { "sets": 2, "reps": 5 },
                "progression": { "sets": 2, "reps": 7 }
              }
            },
            {
              "id": "pullups_10",
              "step": 10,
              "name": "One-Arm Pull-ups",
              "slug": "one_arm_pullups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "master_step": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 1 },
                "intermediate": { "sets": 2, "reps": 3 },
                "progression": { "sets": 2, "reps": 6 }
              }
            }
          ]
        },
  
        {
          "id": "leg_raises",
          "name": "Leg Raises",
          "display_name": "Leg Raise Chain",
          "category": "core",
          "primary_muscles": [
            "rectus_abdominis",
            "hip_flexors"
          ],
          "secondary_muscles": [
            "obliques",
            "transverse_abdominis"
          ],
          "equipment": [],
          "steps": [
            {
              "id": "leg_raises_01",
              "step": 1,
              "name": "Knee Tucks",
              "slug": "knee_tucks",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 25 },
                "progression": { "sets": 3, "reps": 40 }
              }
            },
            {
              "id": "leg_raises_02",
              "step": 2,
              "name": "Flat Knee Raises",
              "slug": "flat_knee_raises",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 35 }
              }
            },
            {
              "id": "leg_raises_03",
              "step": 3,
              "name": "Flat Bent-Leg Raises",
              "slug": "flat_bent_leg_raises",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 3, "reps": 30 }
              }
            },
            {
              "id": "leg_raises_04",
              "step": 4,
              "name": "Flat Frog Raises",
              "slug": "flat_frog_raises",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 12 },
                "progression": { "sets": 3, "reps": 25 }
              }
            },
            {
              "id": "leg_raises_05",
              "step": 5,
              "name": "Flat Straight-Leg Raises",
              "slug": "flat_straight_leg_raises",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "leg_raises_06",
              "step": 6,
              "name": "Hanging Knee Raises",
              "slug": "hanging_knee_raises",
              "type": "repetitions",
              "unilateral": false,
              "equipment": ["pull_up_bar"],
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "leg_raises_07",
              "step": 7,
              "name": "Hanging Bent-Leg Raises",
              "slug": "hanging_bent_leg_raises",
              "type": "repetitions",
              "unilateral": false,
              "equipment": ["pull_up_bar"],
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "leg_raises_08",
              "step": 8,
              "name": "Hanging Frog Raises",
              "slug": "hanging_frog_raises",
              "type": "repetitions",
              "unilateral": false,
              "equipment": ["pull_up_bar"],
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "leg_raises_09",
              "step": 9,
              "name": "Partial Straight-Leg Raises",
              "slug": "partial_straight_leg_raises",
              "type": "repetitions",
              "unilateral": false,
              "equipment": ["pull_up_bar"],
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "leg_raises_10",
              "step": 10,
              "name": "Hanging Straight-Leg Raises",
              "slug": "hanging_straight_leg_raises",
              "type": "repetitions",
              "unilateral": false,
              "master_step": true,
              "equipment": ["pull_up_bar"],
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 30 }
              }
            }
          ]
        },
  
        {
          "id": "bridges",
          "name": "Bridges",
          "display_name": "Bridge Chain",
          "category": "posterior_chain",
          "primary_muscles": [
            "erector_spinae",
            "glutes",
            "hamstrings"
          ],
          "secondary_muscles": [
            "shoulders",
            "biceps",
            "core"
          ],
          "equipment": [],
          "steps": [
            {
              "id": "bridges_01",
              "step": 1,
              "name": "Short Bridges",
              "slug": "short_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 25 },
                "progression": { "sets": 3, "reps": 50 }
              }
            },
            {
              "id": "bridges_02",
              "step": 2,
              "name": "Straight Bridges",
              "slug": "straight_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 10 },
                "intermediate": { "sets": 2, "reps": 20 },
                "progression": { "sets": 3, "reps": 40 }
              }
            },
            {
              "id": "bridges_03",
              "step": 3,
              "name": "Angled Bridges",
              "slug": "angled_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 3, "reps": 30 }
              }
            },
            {
              "id": "bridges_04",
              "step": 4,
              "name": "Head Bridges",
              "slug": "head_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 2, "reps": 25 }
              }
            },
            {
              "id": "bridges_05",
              "step": 5,
              "name": "Half Bridges",
              "slug": "half_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 8 },
                "intermediate": { "sets": 2, "reps": 15 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "bridges_06",
              "step": 6,
              "name": "Full Bridges",
              "slug": "full_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 6 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "bridges_07",
              "step": 7,
              "name": "Wall Walking Down Bridges",
              "slug": "wall_walking_down_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 3 },
                "intermediate": { "sets": 2, "reps": 6 },
                "progression": { "sets": 2, "reps": 10 }
              }
            },
            {
              "id": "bridges_08",
              "step": 8,
              "name": "Wall Walking Up Bridges",
              "slug": "wall_walking_up_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 2 },
                "intermediate": { "sets": 2, "reps": 4 },
                "progression": { "sets": 2, "reps": 8 }
              }
            },
            {
              "id": "bridges_09",
              "step": 9,
              "name": "Closing Bridges",
              "slug": "closing_bridges",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 1 },
                "intermediate": { "sets": 2, "reps": 3 },
                "progression": { "sets": 2, "reps": 6 }
              }
            },
            {
              "id": "bridges_10",
              "step": 10,
              "name": "Stand-to-Stand Bridges",
              "slug": "stand_to_stand_bridges",
              "type": "repetitions",
              "unilateral": false,
              "master_step": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 1 },
                "intermediate": { "sets": 2, "reps": 3 },
                "progression": {
                  "sets": 2,
                  "reps_min": 10,
                  "reps_max": 30
                }
              }
            }
          ]
        },
  
        {
          "id": "handstand_pushups",
          "name": "Handstand Push-ups",
          "display_name": "Handstand Push-up Chain",
          "category": "vertical_upper_body_push",
          "primary_muscles": [
            "shoulders",
            "triceps",
            "trapezius"
          ],
          "secondary_muscles": [
            "forearms",
            "core",
            "chest"
          ],
          "equipment": [],
          "steps": [
            {
              "id": "handstand_pushups_01",
              "step": 1,
              "name": "Wall Headstands",
              "slug": "wall_headstands",
              "type": "hold",
              "unilateral": false,
              "standards": {
                "beginner": { "duration_seconds": 30 },
                "intermediate": { "duration_seconds": 60 },
                "progression": { "duration_seconds": 120 }
              }
            },
            {
              "id": "handstand_pushups_02",
              "step": 2,
              "name": "Crow Stands",
              "slug": "crow_stands",
              "type": "hold",
              "unilateral": false,
              "standards": {
                "beginner": { "duration_seconds": 10 },
                "intermediate": { "duration_seconds": 30 },
                "progression": { "duration_seconds": 60 }
              }
            },
            {
              "id": "handstand_pushups_03",
              "step": 3,
              "name": "Wall Handstands",
              "slug": "wall_handstands",
              "type": "hold",
              "unilateral": false,
              "standards": {
                "beginner": { "duration_seconds": 30 },
                "intermediate": { "duration_seconds": 60 },
                "progression": { "duration_seconds": 120 }
              }
            },
            {
              "id": "handstand_pushups_04",
              "step": 4,
              "name": "Half Handstand Push-ups",
              "slug": "half_handstand_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 20 }
              }
            },
            {
              "id": "handstand_pushups_05",
              "step": 5,
              "name": "Handstand Push-ups",
              "slug": "handstand_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 10 },
                "progression": { "sets": 2, "reps": 15 }
              }
            },
            {
              "id": "handstand_pushups_06",
              "step": 6,
              "name": "Close Handstand Push-ups",
              "slug": "close_handstand_pushups",
              "type": "repetitions",
              "unilateral": false,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 9 },
                "progression": { "sets": 2, "reps": 12 }
              }
            },
            {
              "id": "handstand_pushups_07",
              "step": 7,
              "name": "Uneven Handstand Push-ups",
              "slug": "uneven_handstand_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 5 },
                "intermediate": { "sets": 2, "reps": 8 },
                "progression": { "sets": 2, "reps": 10 }
              }
            },
            {
              "id": "handstand_pushups_08",
              "step": 8,
              "name": "Half One-Arm Handstand Push-ups",
              "slug": "half_one_arm_handstand_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 4 },
                "intermediate": { "sets": 2, "reps": 6 },
                "progression": { "sets": 2, "reps": 8 }
              }
            },
            {
              "id": "handstand_pushups_09",
              "step": 9,
              "name": "Lever Handstand Push-ups",
              "slug": "lever_handstand_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 3 },
                "intermediate": { "sets": 2, "reps": 4 },
                "progression": { "sets": 2, "reps": 6 }
              }
            },
            {
              "id": "handstand_pushups_10",
              "step": 10,
              "name": "One-Arm Handstand Push-ups",
              "slug": "one_arm_handstand_pushups",
              "type": "repetitions",
              "unilateral": true,
              "per_side": true,
              "master_step": true,
              "standards": {
                "beginner": { "sets": 1, "reps": 1 },
                "intermediate": { "sets": 2, "reps": 2 },
                "progression": { "sets": 1, "reps": 5 }
              }
            }
          ]
        }
      ]
    },
  
    "progression_rules": {
      "levels": [
        {
          "id": "beginner",
          "name": "Beginner",
          "description": "Initial target for learning the exercise."
        },
        {
          "id": "intermediate",
          "name": "Intermediate",
          "description": "Higher volume target demonstrating improved proficiency."
        },
        {
          "id": "progression",
          "name": "Progression",
          "description": "Target used to determine readiness to advance to the next step."
        }
      ],
      "default_progression_rule": {
        "description": "A user should normally achieve the progression standard for the current step before advancing to the next step.",
        "advance_when": "progression_standard_completed",
        "next_step": "current_step + 1"
      },
      "master_step_rule": {
        "description": "Step 10 is the master step and has no subsequent step in the chain.",
        "advance_when": "none"
      }
    },
  
    "tracking": {
      "supported_activity_types": [
        "repetitions",
        "hold"
      ],
      "supported_metrics": [
        "sets_completed",
        "reps_completed",
        "duration_seconds",
        "side",
        "rpe",
        "form_rating",
        "completed"
      ],
      "sides": [
        "left",
        "right",
        "both",
        "not_applicable"
      ]
    }
  }
  